import { makeAutoObservable } from "mobx";

export default class YearStore {
    constructor() {
        this._years = [];
        makeAutoObservable(this);
    }

    setYears(years) {
        this._years = years;
    }

    get years() {
        return this._years;
    }
}