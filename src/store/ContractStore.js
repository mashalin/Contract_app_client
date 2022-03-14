import { makeAutoObservable } from "mobx";

export default class ContractStore {
    constructor() {
        this._contracts = [];
        this._count = 0;
        makeAutoObservable(this);
    }

    setContracts(contracts) {
        this._contracts = contracts;
    }

    get contracts() {
        return this._contracts;
    }

    setCount(count) {
        this._count = count;
    }

    get count() {
        return this._count;
    }
}