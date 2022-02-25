import { $host } from "./index";

export const createDocFile5 = async (doc5) => {
    const {data} = await $host.post('api/docFile5', doc5);
    return data;
}

export const fetchDocFiles5 = async () => {
    const {data} = await $host.get('api/docFile5');
    return data;
}

export const deleteDocFile5 = async (id) => {
    const {data} = await $host.delete('api/docFile5/' + id);
    return data;
}