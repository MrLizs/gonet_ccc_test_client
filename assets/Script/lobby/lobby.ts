
import { _decorator, Component, Node, Label, director } from 'cc';
import proto from '../../Proto.js/proto.js';
import { playerMgr } from '../data/playerMgr';
import { clientEvent } from '../framework/clientEvent';
import { Packet } from '../framework/network/Packet';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = lobby
 * DateTime = Wed Jan 05 2022 10:21:00 GMT+0800 (中国标准时间)
 * Author = ls710
 * FileBasename = lobby.ts
 * FileBasenameNoExtension = lobby
 * URL = db://assets/Script/lobby/lobby.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('lobby')
export class lobby extends Component {

    @property(Label)
    errLabel: Label = null;

    @property(Label)
    player_nickName: Label = null;
    @property(Label)
    player_coins: Label = null;

    onLoad() {
        clientEvent.on("W_C_Drawsomeing_EnterReponse", this.W_C_Drawsomeing_EnterReponse, this)
    }

    onDestroy() {
        clientEvent.on("W_C_Drawsomeing_EnterReponse", this.W_C_Drawsomeing_EnterReponse, this)
    }

    start() {
        this.player_nickName.string = "用户昵称：" + playerMgr.instance.nickName
        this.player_coins.string = "用户金币：" + playerMgr.instance.gold
    }

    enterDrawsomeing() {
        var ds = proto.message.C_W_Game_LoginRequset.create()
        ds.PacketHead = Packet.BuildPacketHead(playerMgr.instance.AccountID);
        ds.GameType = proto.message.GameIndex.DRAWSOMEING
        ds.PlayerId = playerMgr.instance.playerID;
        Packet.SendPacket("C_W_Game_LoginRequset", ds)
    }

    showErrLabel(errTips) {
        this.errLabel.string = errTips
        this.errLabel.node.active = true;
        setTimeout(() => {
            this.errLabel.node.active = false;
        }, 1500);
    }

    W_C_Drawsomeing_EnterReponse(packet: proto.message.W_C_Drawsomeing_EnterReponse) {
        // drawsomeingData.instance.roomData = packet;
        director.loadScene("drawSomething")
    }

}

//你画我猜进入响应
Packet.RegisterPacket("W_C_Drawsomeing_EnterReponse", function (packet) {
    clientEvent.dispatchEvent("W_C_Drawsomeing_EnterReponse", packet);
});
