import { log } from "cc";
import proto from "../../../Proto.js/proto.js";
import { playerMgr } from "../../data/playerMgr";
import { clientEvent } from "../clientEvent";
import { CRC32 } from "./crc";
import dh from "./dh";
const message = proto.message;

// const GAMEURL = "wss://huojuke.com:31700/ws";
// const GAMEURL = "ws://10.10.24.145:31700/ws";
const GAMEURL = "ws://192.168.31.21:31800/ws";

var STX = 0X27;
var CKX = 0x72;

var SERVER_VERSION = 102008000;
var MAX_PACKET_SIZE = 32 * 1024;
var MySocket: WebSocket;
var SocketTask: any;
var isInit = false;

function IntToBytes(v: number): Uint8Array {
    var b = new Uint8Array(4);
    b[0] = v
    b[1] = v >> 8
    b[2] = v >> 16
    b[3] = v >> 24
    return b
}

//字节转换成整形
function BytesToInt(b: number): number {
    return b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24;
}

function indexOfMulti(data: any, searchElements: any, fromIndex: any = 0): number {
    fromIndex = fromIndex || 0;
    var index = data.indexOf(searchElements[0], fromIndex);
    if (searchElements.length === 1 || index === -1) {
        // Not found or no other elements to check
        return index;
    }

    for (var i = index, j = 0; j < searchElements.length && i < data.length; i++, j++) {
        if (data[i] !== searchElements[j]) {
            return indexOfMulti(data, searchElements, index + 1);
        }
    }

    return (i === index + searchElements.length) ? index : -1;
};

export namespace Packet {
    //创建包头
    export function BuildPacketHead(Id: number): any {
        var pHead = message.Ipacket.create();
        pHead.Ckx = CKX;
        pHead.Stx = STX;
        pHead.Id = Id;
        return pHead
    }

    //包处理回调函数
    export function RegisterPacket(packetName: string, func: any): void {
        var name = packetName.toLowerCase();
        var id = CRC32.str(name);
        if (m_callbacks[id] != null) {
            console.log("消息[%s]重复注册!!!!!!!!!!!!!", packetName);
            return;
        }

        m_callbacks[id] = func;
    }

    //--处理包函数
    export function HandlePacket(dat: any): boolean {
        var id = BytesToInt(dat.slice(0, 4));
        var buf = dat.slice(4);
        var packetcreator = m_packets[id];
        if (packetcreator != null) {
            var packet = packetcreator().decode(buf);
            log("收到服务器消息：[", packet, "]");
            if (m_callbacks[id] == null) {
                log("消息[", packet, "]没有注册!!!!!!!!!!!!!");
                return false;
            }
            m_callbacks[id](packet);
            return true;
        }
        return false;
    }


    //--发送包函数
    export function SendPacket(name: string, dat: any): boolean {
        dat.PacketHead = Packet.BuildPacketHead(playerMgr.instance.AccountID);
        if (dat.PlayerID != undefined) {
            dat.PlayerID = playerMgr.instance.playerID;
        }
        var id = CRC32.str(name.toLowerCase());
        var packetName = "message." + name;
        if (packetName != null) {
            var crc = IntToBytes(id);
            var packetcreator = m_packets[id];
            if (packetcreator != null) {
                var packet = packetcreator().encode(dat).finish();
                var head = IntToBytes(packet.length + TCP_HEAD_SIZE);
                var buff = new Uint8Array(TCP_HEAD_SIZE + crc.length + packet.length);
                buff.set(head, 0)
                buff.set(crc, TCP_HEAD_SIZE);
                buff.set(packet, TCP_HEAD_SIZE + crc.length);
                console.log(`SendPacket : ${name} , data ${buff.toString()}`);
                Network.Send(buff);
                return true;
            }
        }
        return false;
    }

    //tcp粘包特殊结束标志
    /*export function SendPacket(name : string, dat : any) : boolean{
        var id = CRC32.str(name.toLowerCase());
        var packetName = "message." + name;
        if(packetName != null)
        {
            var crc =IntToBytes(id);
            var packetcreator = m_packets[id];
            if (packetcreator != null){
                var packet = packetcreator().encode(dat).finish();
                var buff = new Uint8Array(crc.length + packet.length + TCP_END_LENGTH);
                buff.set(crc, 0);
                buff.set(packet, crc.length);
                buff.set(TCP_END, crc.length+packet.length);
                //var buff = Uint8ArrayToString(IntToBytes(id)) + dat + TCP_END;
                Network.Send(buff);
                return true;
            }
        }
        return false;
    }*/

    //解析包
    export function ReceivePacket(dat: Uint8Array): void {
        function seekToTcpEnd(dat) {
            var nLen = dat.length;
            if (nLen < TCP_HEAD_SIZE) {
                return 0;
            }

            var nSize = BytesToInt(dat.slice(0, 4))
            if (nSize + TCP_HEAD_SIZE <= nLen) {
                return nSize + TCP_HEAD_SIZE;
            }
            return 0;
        }

        var buff = new Uint8Array(m_pInBuffer.length + dat.length);
        buff.set(m_pInBuffer, 0);
        buff.set(dat, m_pInBuffer.length);
        m_pInBuffer = new Uint8Array(0);
        var nCurSize = 0
        function ParsePacekt() {
            var nPacketSize = 0
            var buff1 = buff.slice(nCurSize)
            var nBufferSize = buff1.length;
            nPacketSize = seekToTcpEnd(buff1)
            // console.log(nPacketSize, nBufferSize, TCP_END_LENGTH)
            if (nPacketSize != 0) {
                if (nBufferSize == nPacketSize) { //完整包
                    //print(string.sub(buff1, TCP_HEAD_SIZE, nPacketSize))
                    HandlePacket(buff1.slice(TCP_HEAD_SIZE, nPacketSize))
                    nCurSize = nCurSize + nPacketSize
                }
                else if (nBufferSize > nPacketSize) {
                    //print(string.sub(buff1, TCP_HEAD_SIZE, nPacketSize))
                    HandlePacket(buff1.slice(TCP_HEAD_SIZE, nPacketSize))
                    nCurSize = nCurSize + nPacketSize
                    ParsePacekt();
                }
                else if (nBufferSize < 128 * 1024) {
                    m_pInBuffer = buff.slice(nCurSize)
                }
                else {
                    console.log("超出最大包限制，丢弃该包")
                }
            }
        }

        ParsePacekt();
    };

    //--protobuf-- 自动化解析
    export function RegisterPacketCreator(name: string, func: any): void {
        var id = CRC32.str(name.toLowerCase());
        m_packets[id] = func;
    };
}


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
        console.log("Network close...");
        if (MySocket) {
            MySocket.close();
            MySocket = null;
        }
    }

    export function init(): void {
        console.log('Network initSocket...');
        Init_Universal_Network();
    }
}

function Init_Universal_Network() {
    MySocket = new WebSocket(GAMEURL);
    MySocket.binaryType = 'arraybuffer';

    MySocket.onopen = function (evt) {
        console.log('Network onopen...');
        {
            isInit = true;
        }
        clientEvent.dispatchEvent("NetConnect", "ok");

        HeardPacket = setInterval(() => {
            let _packet = proto.message.HeardPacket.create();
            Packet.SendPacket("HeardPacket", _packet)
            // log("心跳 HeardPacket")
        }, 10000)
    };

    MySocket.onmessage = function (evt) {
        // console.log("onmessage 收到数据 正在解包...")
        var _data = new Uint8Array(evt.data);
        Packet.ReceivePacket(_data);
    };

    MySocket.onerror = function (evt) {
        console.log('Network onerror...');
        clientEvent.dispatchEvent("network_error", "网络异常，请刷新");
        clearInterval(HeardPacket)
    };

    MySocket.onclose = function (evt) {
        console.log('Network onclose...');
        clientEvent.dispatchEvent("network_error", "网络关闭，请重试");
        isInit = false;
        clearInterval(HeardPacket)
    };
}

var HeardPacket;


//tcp粘包特殊结束标志
/*var TCP_END = new Uint8Array(7);      //解决tpc粘包半包,特殊结束标志,pb采用Varint编码高位有特殊含义
TCP_END.set( [240,159,146,158,226,153,161],0);
var TCP_END_LENGTH  = TCP_END.length;*/
var TCP_HEAD_SIZE = 4;                  //解决tpc粘包半包,包头固定长度
var m_pInBuffer = new Uint8Array(0);
var m_callbacks = new Array();
var m_packets = new Array();

Packet.RegisterPacketCreator("HeardPacket", function () {
    return message.HeardPacket;
})
//注册pb消息体
Packet.RegisterPacketCreator("LoginAccountRequest", function () {
    return message.LoginAccountRequest;
})
Packet.RegisterPacketCreator("LoginAccountResponse", function () {
    return message.LoginAccountResponse;
})
Packet.RegisterPacketCreator("CreatePlayerRequest", function () {
    return message.CreatePlayerRequest;
})
Packet.RegisterPacketCreator("LoginPlayerRequset", function () {
    return message.LoginPlayerRequset;
})
Packet.RegisterPacketCreator("SelectPlayerResponse", function () {
    return message.SelectPlayerResponse;
})
//#endregion
