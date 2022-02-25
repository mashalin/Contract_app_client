import { $host, $authHost } from "./index";

export const createJournal = async (journal) => {
    const {data} = await $host.post('api/journal', journal);
    return data;
}

export const fetchJournals = async (journal) => {
    const {data} = await $authHost.post('api/journal/find', journal);
    return data;
}

export const deleteAllJournals = async (courseId) => {
    const {data} = await $authHost.delete('api/journal/delete/' + courseId);
    return data;
}