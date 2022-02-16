import { Component, Game, log, _decorator } from "cc";
import { Packet } from "./Packet";
import proto from "../../../Proto.js/proto.js";
const message = proto.message;

import dh from "./dh"

var SERVER_VERSION = 102008000;
var MAX_PACKET_SIZE = 32 * 1024;
var MySocket: WebSocket;
var isInit = false;

export namespace Network {
	//发送消息
	export function Send(data) {
		if (!isInit) {
			console.log('Network is not inited...');
		} else {
			MySocket.send(data);
		}
	}

	export function Close() {
		if (MySocket) {
			console.log("Network close...");
			MySocket.close();
			MySocket = null;
		}
	}
}

var HeardPacket;

function init(): void {
	console.log('Network initSocket...');
	MySocket = new WebSocket("ws://127.0.0.1:31700/ws");
	MySocket.binaryType = 'arraybuffer';

	MySocket.onopen = function (evt) {
		console.log('Network onopen...');
		{
			isInit = true;
		}
		LoginGate();

		// HeardPacket = setInterval(() => {
		// 	let _packet = proto.message.HeardPacket.create();
		// 	Packet.SendPacket("HeardPacket", _packet)
		// 	log("心跳 HeardPacket")
		// }, 10000)
	};

	MySocket.onmessage = function (evt) {
		var _data = new Uint8Array(evt.data);
		Packet.ReceivePacket(_data);
	};

	MySocket.onerror = function (evt) {
		console.log('Network onerror...');
		clearInterval(HeardPacket)
	};

	MySocket.onclose = function (evt) {
		console.log('Network onclose...');
		isInit = false;
		clearInterval(HeardPacket)
	};
}

function LoginGate() {
	// console.log("LoginGate " + dh.key.PubKey())
	var packet1 = message.C_G_LoginResquest.create();
	packet1.PacketHead = Packet.BuildPacketHead(0);
	packet1.Key = dh.instance.PubKey();
	Packet.SendPacket("C_G_LoginResquest", packet1);
}


const { ccclass, property } = _decorator;

@ccclass('network')
export class network extends Component {
	onLoad() {
		init();
	}

	onDestroy() {
		log("network销毁");
	}
}
