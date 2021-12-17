import { $host, $authHost } from "./index";

export const createCathedra = async (cathedra) => {
    const {data} = await $authHost.post('api/cathedra', cathedra);
    return data;
}

export const fetchCathedras = async () => {
    const {data} = await $host.get('api/cathedra');
    return data;
}

export const fetchOneCathedra = async (id) => {
    const {data} = await $host.get('api/cathedra/' + id);
    return data;
}

export const updateCathedra = async (id, cathedra) => {
    const {data} = await $authHost.put('api/cathedra/' + id, cathedra);
    return data;
}

export const deleteCathedra = async (id) => {
    const {data} = await $authHost.delete('api/cathedra/' + id);
    return data;
}