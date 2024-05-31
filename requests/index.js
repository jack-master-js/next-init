import request from '@/utils/fetcher';

const host = process.env.API_HOST;

export function getUsers(params) {
    return request(`${host}/users`, params);
}
