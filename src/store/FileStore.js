import { makeAutoObservable } from "mobx";

export default class FileStore {
    constructor() {
        this._files =  [];
        makeAutoObservable(this);
    }

    setFiles(files) {
        this._files = files;
    }

    get files() {
        return this._files;
    }
}