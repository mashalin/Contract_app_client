import { makeAutoObservable } from "mobx";

export default class CustomerStore {
    constructor() {
        this._customers = [];
        makeAutoObservable(this);
    }

    setCustomers(customers) {
        this._customers = customers;
    }

    get customers() {
        return this._customers;
    }
}