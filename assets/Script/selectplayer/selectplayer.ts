import proto from '../../Proto.js/proto.js';
import { clientEvent } from '../framework/clientEvent';
import { Packet } from '../framework/network/Packet';

import { _decorator, Component, director, Label } from 'cc';
import { playerMgr } from '../data/playerMgr';
const { ccclass, property } = _decorator;
/**
 * Predefined variables
 * Name = selectplayer
 * DateTime = Wed Jan 05 2022 14:23:38 GMT+0800 (中国标准时间)
 * Author = ls710
 * FileBasename = selectplayer.ts
 * FileBasenameNoExtension = selectplayer
 * URL = db://assets/Script/selectplayer/selectplayer.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('selectplayer')
export class selectplayer extends Component {

    @property(Label)
    nickName: Label = null;

    @property(Label)
    errLabel: Label = null;

    createPlayer() {
        if (this.nickName.string == "") {
            this.showErrLabel("请输入昵称")
            return;
        }

        let packet = proto.message.C_W_CreatePlayerRequest.create()
        packet.PacketHead = Packet.BuildPacketHead(playerMgr.instance.AccountID);
        packet.PlayerName = this.nickName.string;
        playerMgr.instance.nickName = this.nickName.string;
        packet.Sex = 0;
        Packet.SendPacket("C_W_CreatePlayerRequest", packet);
    }

    showErrLabel(errTips) {
        this.errLabel.string = errTips
        this.errLabel.node.active = true;
        setTimeout(() => {
            this.errLabel.node.active = false;
        }, 1500);
    }

}
