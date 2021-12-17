import { makeAutoObservable } from "mobx";

export default class AnnounceStore {
    constructor() {
        this._announces = [];
        makeAutoObservable(this);
    }

    setAnnounces(announces) {
        this._announces = announces;
    }

    get announces() {
        return this._announces;
    }
}