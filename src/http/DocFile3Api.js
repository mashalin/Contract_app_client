import { $host } from "./index";

export const createDocFile3 = async (doc3) => {
    const {data} = await $host.post('api/docFile3', doc3);
    return data;
}

export const fetchDocFiles3 = async () => {
    const {data} = await $host.get('api/docFile3');
    return data;
}

export const deleteDocFile3 = async (id) => {
    const {data} = await $host.delete('api/docFile3/' + id);
    return data;
}