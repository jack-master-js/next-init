import qs from 'query-string';
import store from 'store';

export default function fetcher(url, params, method = 'GET', headers = {}) {
    let body = '';
    let options = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
            Authorization: store.get('access_token') || '',
            ...headers,
        },
    };

    if (params) {
        if (options.method === 'GET') {
            if (typeof params === 'string') {
                url = `${url}?${params}`;
            } else {
                url = `${url}?${qs.stringify(params)}`;
            }
        } else {
            if (typeof params === 'string') {
                body = params;
            } else {
                body = JSON.stringify(params);
            }
            options.body = body;
        }
    }

    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(async (res) => {
                let json = await res.json();
                resolve(json);
            })
            .catch((e) => {
                reject(e.message);
            });
    });
}
