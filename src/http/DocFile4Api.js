import { $host } from "./index";

export const createDocFile4 = async (doc4) => {
    const {data} = await $host.post('api/docFile4', doc4);
    return data;
}

export const fetchDocFiles4 = async () => {
    const {data} = await $host.get('api/docFile4');
    return data;
}

export const deleteDocFile4 = async (id) => {
    const {data} = await $host.delete('api/docFile4/' + id);
    return data;
}