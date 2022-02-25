import { $host } from "./index";

export const createDocFile2 = async (doc2) => {
    const {data} = await $host.post('api/docFile2', doc2);
    return data;
}

export const fetchDocFiles2 = async () => {
    const {data} = await $host.get('api/docFile2');
    return data;
}

export const deleteDocFile2 = async (id) => {
    const {data} = await $host.delete('api/docFile2/' + id);
    return data;
}