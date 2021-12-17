import { makeAutoObservable } from "mobx";

export default class AdminStore {
    constructor() {
        this._admins =  [];
        makeAutoObservable(this);
    }

    setAdmins(admins) {
        this._admins = admins;
    }

    get admins() {
        return this._admins;
    }
}