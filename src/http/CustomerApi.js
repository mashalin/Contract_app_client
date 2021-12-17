import { $host, $authHost } from "./index";

export const createCustomer = async (customer) => {
    const {data} = await $authHost.post('api/customer', customer);
    return data;
}

export const fetchCustomers = async () => {
    const {data} = await $host.get('api/customer');
    return data;
}

export const fetchOneCustomer = async (id) => {
    const {data} = await $host.get('api/customer/' + id);
    return data;
}

export const updateCustomer = async (id, customer) => {
    const {data} = await $authHost.put('api/customer/' + id, customer);
    return data;
}

export const deleteCustomer = async (id) => {
    const {data} = await $authHost.delete('api/customer/' + id);
    return data;
}