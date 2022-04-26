
import { _decorator, Component, Node, director, Label, Prefab, instantiate } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Network, Packet } from '../framework/network/Packet';
import proto from "../../Proto.js/proto.js";
import Dh from '../framework/network/dh';
import { Md5 } from '../framework/md5';
import { playerMgr } from '../data/playerMgr';
import dh from '../framework/network/dh';
const message = proto.message;

const { ccclass, property } = _decorator;

var BUILD_NO = "1,5,1,1";

/**
 * Predefined variables
 * Name = login
 * DateTime = Tue Jan 04 2022 14:46:14 GMT+0800 (中国标准时间)
 * Author = ls710
 * FileBasename = login.ts
 * FileBasenameNoExtension = login
 * URL = db://assets/Script/login/login.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('login')
export class login extends Component {

    @property(Node)
    mask: Node = null;

    @property(Label)
    errLabel: Label = null;

    @property(Label)
    accInput: Label = null;
    @property(Label)
    pwInput: Label = null;

    @property(Prefab)
    createRole: Prefab = null

    start() {
        this.mask.active = true;
        this.errLabel.node.active = false;
        Network.init()
    }

    onLoad() {
        Dh.instance.ExchangePubk(0n);
        clientEvent.on("NetConnect", this.netconnect, this)
        clientEvent.on("SelectPlayerResponse", this.SelectPlayerResponse, this)
        clientEvent.on("LoginAccountResponse", this.LoginAccountResponse, this)

    }

    onDestroy() {
        clientEvent.off("NetConnect", this.netconnect, this)
        clientEvent.off("SelectPlayerResponse", this.SelectPlayerResponse, this)
        clientEvent.off("LoginAccountResponse", this.LoginAccountResponse, this)

    }

    netconnect(ok: String) {
        this.mask.active = false;
    }

    LoginAccount() {
        var AccountName = this.accInput.string;
        var packet1 = proto.message.LoginAccountRequest.create();
        packet1.PacketHead = Packet.BuildPacketHead(0);
        packet1.AccountName = AccountName;
        packet1.BuildNo = BUILD_NO;
        packet1.Password = md5(ToSlat(AccountName, this.pwInput.string));
        packet1.Key = Dh.instance.ShareKey();
        Packet.SendPacket("LoginAccountRequest", packet1);
    }

    LoginAccountResponse(packet: proto.message.LoginAccountResponse) {
        this.showErrLabel("登录失败")
    }

    SelectPlayerResponse(packet: proto.message.SelectPlayerResponse) {
        playerMgr.instance.gold = 0;
        playerMgr.instance.AccountID = packet.AccountId
        if (packet.PlayerData.length != 0) {
            dh.instance.ExchangePubk(packet.Key);
            playerMgr.instance.init(packet.PlayerData[0])
            director.loadScene("lobby")
        } else {
            let createNode = instantiate(this.createRole)
            this.node.parent.addChild(createNode)
        }
    }

    showErrLabel(errTips) {
        this.errLabel.string = errTips
        this.errLabel.node.active = true;
        setTimeout(() => {
            if (this.errLabel)
                this.errLabel.node.active = false;
        }, 1500);
    }
}


function ToSlat(accountName, pwd) {
    return accountName + "__" + pwd
}

function md5(content) {
    return Md5.Instance.get_md5(content)
}

Packet.RegisterPacket("SelectPlayerResponse", function (packet) {
    clientEvent.dispatchEvent("SelectPlayerResponse", packet);
});
Packet.RegisterPacket("LoginAccountResponse", function (packet) {
    clientEvent.dispatchEvent("LoginAccountResponse", packet);
});
