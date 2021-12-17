import { $host } from "./index";

export const createFile = async (file) => {
    const {data} = await $host.post('api/files', file);
    return data;
}

export const fetchFiles = async () => {
    const {data} = await $host.get('api/files');
    return data;
}

export const deleteFile = async (id) => {
    const {data} = await $host.delete('api/files/' + id);
    return data;
}