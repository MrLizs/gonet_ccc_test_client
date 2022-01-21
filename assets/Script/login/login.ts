
import { _decorator, Component, Node, director, Label, EditBoxComponent, Prefab, instantiate, find } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { Packet } from '../framework/network/Packet';
import proto from "../../Proto.js/proto.js";
import Dh from '../framework/network/dh';
import { Md5 } from '../framework/md5';
import { playerMgr } from '../data/playerMgr';
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
    }

    onLoad() {
        Dh.instance.ExchangePubk(0n);
        clientEvent.on("NetConnect", this.netconnect, this)
        clientEvent.on("GateLogincompleted", this.GateLogincompleted, this)
        clientEvent.on("AccountLoginError", this.AccLoginError, this)
        clientEvent.on("AccountLoginCompleted", this.AccountLoginCompleted, this)
        clientEvent.on("W_C_CreatePlayerResponse", this.W_C_CreatePlayerResponse, this)
        clientEvent.on("A_C_RegisterResponse", this.A_C_RegisterResponse, this)

    }

    onDestroy() {
        clientEvent.off("NetConnect", this.netconnect, this)
        clientEvent.off("GateLogincompleted", this.GateLogincompleted, this)
        clientEvent.off("AccountLoginError", this.AccLoginError, this)
        clientEvent.off("AccountLoginCompleted", this.AccountLoginCompleted, this)
        clientEvent.off("W_C_CreatePlayerResponse", this.W_C_CreatePlayerResponse, this)
        clientEvent.off("A_C_RegisterResponse", this.A_C_RegisterResponse, this)
    }


    netconnect(ok: String) {
        console.log("aaabbb");
    }

    GateLogincompleted() {
        this.mask.active = false;
    }

    LoginAccount() {
        var AccountName = this.accInput.string;
        var packet1 = proto.message.C_A_LoginRequest.create();
        packet1.PacketHead = Packet.BuildPacketHead(0);
        packet1.AccountName = AccountName;
        packet1.BuildNo = BUILD_NO;
        packet1.Password = md5(ToSlat(AccountName, this.pwInput.string));
        packet1.Key = Dh.instance.ShareKey();
        Packet.SendPacket("C_A_LoginRequest", packet1);
    }

    registerAccount() {
        let AccountName = this.accInput.string;
        let Password = md5(ToSlat(AccountName, this.pwInput.string));
        let packet1 = proto.message.C_A_RegisterRequest.create();
        packet1.PacketHead = Packet.BuildPacketHead(0);
        packet1.AccountName = AccountName;
        packet1.Password = Password;
        Packet.SendPacket("C_A_RegisterRequest", packet1);
    }

    AccLoginError(packet: proto.message.A_C_LoginResponse) {
        if (packet.Error == 0) {
            director.loadScene("lobby")
        } else {
            this.showErrLabel("账号或密码错误")
        }
    }

    AccountLoginCompleted(packet: proto.message.W_C_SelectPlayerResponse) {
        playerMgr.instance.AccountID = packet.AccountId;
        if (packet.PlayerData.length != 0) {
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

    W_C_CreatePlayerResponse(packet: proto.message.W_C_CreatePlayerResponse) {
        if (packet.Error == 0) {
            let createRoleNode = find("CreateRole", this.node.parent)
            if (createRoleNode) {
                this.node.parent.removeChild(createRoleNode)
            }
            playerMgr.instance.gold = 0;
            playerMgr.instance.playerID = packet.PlayerId;
            playerMgr.instance.AccountID = packet.AccountId
            director.loadScene("lobby")
        } else {
            this.showErrLabel("创建角色失败")
        }
    }

    A_C_RegisterResponse(packet: proto.message.A_C_RegisterResponse) {
        if (packet.Error != 0) {
            this.showErrLabel("已注册")
        } else {
            this.showErrLabel("注册成功")
        }
    }
}


function ToSlat(accountName, pwd) {
    return accountName + "__" + pwd
}

function md5(content) {
    return Md5.Instance.get_md5(content)
}

//账号登录成功
Packet.RegisterPacket("W_C_SelectPlayerResponse", function (packet) {
    clientEvent.dispatchEvent("AccountLoginCompleted", packet);
});

//账号登录失败
Packet.RegisterPacket("A_C_LoginResponse", function (packet) {
    clientEvent.dispatchEvent("AccountLoginError", packet);
});

//创建角色响应
Packet.RegisterPacket("W_C_CreatePlayerResponse", function (packet) {
    clientEvent.dispatchEvent("W_C_CreatePlayerResponse", packet);
});

//注册响应
Packet.RegisterPacket("A_C_RegisterResponse", function (packet) {
    clientEvent.dispatchEvent("A_C_RegisterResponse", packet);
});