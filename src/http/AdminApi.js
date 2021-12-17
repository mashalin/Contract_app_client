import { $host, $authHost } from "./index";

export const createAdmin = async (admin) => {
    const {data} = await $authHost.post('api/admin', admin);
    return data;
}

export const fetchAdmins = async () => {
    const {data} = await $host.get('api/admin');
    return data;
}


export const deleteAdmin = async (id) => {
    const {data} = await $authHost.delete('api/admin/' + id);
    return data;
}