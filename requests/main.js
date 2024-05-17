import request from '@/utils/fetcher';

const API_HOST = 'http://localhost:3000';
// const apiHost = typeof window !== 'undefined' ? _config.API_HOST : API_HOST;
const apiHost = process.env.NEXT_PUBLIC_API_HOST || API_HOST;

export function getUsers(params) {
    return request(`${apiHost}/users`, params);
}
