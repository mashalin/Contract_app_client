import { $host } from "./index";

export const createDocFile1 = async (doc1) => {
    const {data} = await $host.post('api/docFile1', doc1);
    return data;
}

export const fetchDocFiles1 = async () => {
    const {data} = await $host.get('api/docFile1');
    return data;
}

export const deleteDocFile1 = async (id) => {
    const {data} = await $host.delete('api/docFile1/' + id);
    return data;
}