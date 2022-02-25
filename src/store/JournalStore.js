import { makeAutoObservable } from "mobx";

export default class JournalStore {
    constructor() {
        this._journals = [];
        makeAutoObservable(this);
    }

    setJournals(journals) {
        this._journals = journals;
    }

    get journals() {
        return this._journals;
    }
}