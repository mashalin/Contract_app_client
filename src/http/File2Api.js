import { $host } from "./index";

export const createFile2 = async (file2) => {
    const {data} = await $host.post('api/files2', file2);
    return data;
}

export const fetchFiles2 = async () => {
    const {data} = await $host.get('api/files2');
    return data;
}

export const deleteFile2 = async (id) => {
    const {data} = await $host.delete('api/files2/' + id);
    return data;
}