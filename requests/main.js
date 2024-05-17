import request from '@/utils/fetcher';

const host = process.env.NEXT_PUBLIC_API_HOST;

export function getUsers(params) {
    return request(`${host}/users`, params);
}
