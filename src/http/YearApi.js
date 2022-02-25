import { $host, $authHost } from "./index";

export const createYear = async (year) => {
    const {data} = await $host.post('api/year', year);
    return data;
}

export const fetchYear = async () => {
    const {data} = await $host.get('api/year');
    return data;
}


export const updateYear = async (id, year) => {
    const {data} = await $authHost.put('api/year/' + id, year);
    return data;
}

