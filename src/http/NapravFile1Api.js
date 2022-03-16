import { $host } from "./index";

export const createNapravFile1 = async (naprav) => {
    const {data} = await $host.post('api/naprav1', naprav);
    return data;
}

export const fetchNapravFiles1 = async () => {
    const {data} = await $host.get('api/naprav1');
    return data;
}

export const deleteNapravFile1 = async (id) => {
    const {data} = await $host.delete('api/naprav1/' + id);
    return data;
}