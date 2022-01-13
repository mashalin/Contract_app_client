import { makeAutoObservable } from "mobx";

export default class CourseStore {
    constructor() {
        this._allCourses = [];
        this._courses = [];
        this._page = 1;
        this._totalCount = 0;
        this._limit = 15;
        makeAutoObservable(this);
    }

    setCourses(courses) {
        this._courses = courses;
    }

    setAllCourses(courses) {
        this._allCourses = courses;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    }

    setLimit(limit) {
        this._limit = limit;
    }

    get courses() {
        return this._courses;
    }

    get allCourses() {
        return this._allCourses;
    }

    get totalCount() {
        return this._totalCount;
    }

    get page() {
        return this._page;
    }

    get limit() {
        return this._limit;
    }
}