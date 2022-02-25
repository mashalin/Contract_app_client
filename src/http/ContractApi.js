import { $host, $authHost } from "./index";

export const createContract = async (contract) => {
    const {data} = await $host.post('api/contract', contract);
    return data;
}

export const fetchContracts = async (contract) => {
    const {data} = await $authHost.post('api/contract/find', contract);
    return data;
}

export const deleteContract = async (id) => {
    const {data} = await $authHost.delete('api/contract/' + id);
    return data;
}

export const fetchOneContract = async (id) => {
    const {data} = await $host.get('api/contract/' + id);
    return data;
}

export const updateContract = async (id, contract) => {
    const {data} = await $authHost.put('api/contract/' + id, contract);
    return data;
}

export const deleteAllContract = async (courseId) => {
    const {data} = await $authHost.delete('api/contract/delete/' + courseId);
    return data;
}