import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (login, password) => {
    const {data} = await $host.post('api/user/registration', {login, password, role: 'ADMIN'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const loginFunc = async (login, password) => {
    const {data} = await $host.post('api/user/login', {login, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const fetchUsers = async () => {
    const {data} = await $host.get('api/user');
    return data;
}


export const deleteUser = async (id) => {
    const {data} = await $authHost.delete('api/user/' + id);
    return data;
}