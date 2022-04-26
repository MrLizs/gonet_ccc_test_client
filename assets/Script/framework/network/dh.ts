import { log } from "cc";

const BigMath_Pow = (num, pow) => {
    let total;
    for (let i = 0; i < pow; i++) {
        if (!total) total = num;
        else total = total * num;
    }
    return total;
}

var k: bigint = 0n;
export default class Dh {
    private static _instance: Dh;
    public static get instance(): Dh {
        if (this._instance == null) {
            this._instance = new Dh()
        }
        return this._instance;
    }
    q: bigint;
    a: bigint;
    x: bigint;
    Y1: bigint;
    Y2: bigint;
    // k: bigint;
    /**
     *
     */
    constructor(q = 97n, a = 5n) {
        this.q = q;//素数q
        this.a = a;//q的原根a
        this.x = 0n;//私钥
        this.Y1 = 0n;//自己公钥
        this.Y2 = 0n;//对方公钥
        this.generatePrik();
        this.generatePubk();
    }
    ExchangePubk(key) {
        this.Y2 = BigInt(key);
    }
    ShareKey() {
        k = BigMath_Pow(this.Y2, this.x);
        k = k % this.q;
        return parseInt(BigInt.asUintN(64, k).toString());
    }
    PubKey() {
        return parseInt(BigInt.asUintN(64, this.Y1).toString());
    }
    generatePrik() {
        this.x = BigInt(Math.floor(Math.random() * 10000000)) % this.q;
        this.x = this.x + 1n;
    }
    generatePubk() {
        this.Y1 = BigMath_Pow(this.a, this.x);
        this.Y1 = this.Y1 % this.q;
    }
}