const apiUrl = 'http://localhost:3001';

const api = async (path, params = {}) => {
    const url = `${apiUrl}${path}`;
    const body = await fetch(url, params);
    return await body.json();
};

const headers = (token) => {
    const base = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    const authorization = {
        Authorization: `Bearer ${token}`,
    };

    return token === undefined ? base : { ...base, ...authorization };
};
const get = (path, params) =>
    api(path, {
        ...params,
        method: 'GET',
    });

const apiMethod = (method) => (path, params = {}, token) =>
    api(path, {
        ...params,
        method: method,
        headers: headers(token),
    });

const post = apiMethod('POST');
const put = apiMethod('PUT');
const del = apiMethod('DELETE');

export { get, post, put, del };
