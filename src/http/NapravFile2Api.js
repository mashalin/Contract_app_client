import { $host } from "./index";

export const createNapravFile2 = async (naprav) => {
    const {data} = await $host.post('api/naprav2', naprav);
    return data;
}

export const fetchNapravFiles2 = async () => {
    const {data} = await $host.get('api/naprav2');
    return data;
}

export const deleteNapravFile2 = async (id) => {
    const {data} = await $host.delete('api/naprav2/' + id);
    return data;
}