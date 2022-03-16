import { $host } from "./index";

export const createNapravFile3 = async (naprav) => {
    const {data} = await $host.post('api/naprav3', naprav);
    return data;
}

export const fetchNapravFiles3 = async () => {
    const {data} = await $host.get('api/naprav3');
    return data;
}

export const deleteNapravFile3 = async (id) => {
    const {data} = await $host.delete('api/naprav3/' + id);
    return data;
}