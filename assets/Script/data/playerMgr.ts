
import { _decorator, Component, Node } from 'cc';
import proto from '../../Proto.js/proto.js';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = playerMgr
 * DateTime = Wed Jan 05 2022 15:00:52 GMT+0800 (中国标准时间)
 * Author = ls710
 * FileBasename = playerMgr.ts
 * FileBasenameNoExtension = playerMgr
 * URL = db://assets/Script/data/playerMgr.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

export class playerMgr {
    private static _instance: playerMgr = null;
    public static get instance(): playerMgr {
        if (playerMgr._instance == null) {
            playerMgr._instance = new playerMgr();
        }
        return playerMgr._instance;
    }

    AccountID: number;
    nickName: string;
    gold: number;
    playerID: number;
    myState: number;

    /**
     * 自己是否坐在玩家座位
     */
    isPlayerSeat: boolean;

    init(playerData: proto.message.IPlayerData) {
        this.nickName = playerData.PlayerName;
        this.gold = playerData.PlayerGold;
        this.playerID = playerData.PlayerID;
        this.myState = 0;
    }
}
