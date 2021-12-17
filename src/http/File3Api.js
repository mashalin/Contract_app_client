import { $host } from "./index";

export const createFile3 = async (file3) => {
    const {data} = await $host.post('api/files3', file3);
    return data;
}

export const fetchFiles3 = async () => {
    const {data} = await $host.get('api/files3');
    return data;
}

export const deleteFile3 = async (id) => {
    const {data} = await $host.delete('api/files3/' + id);
    return data;
}