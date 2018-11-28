import 'isomorphic-fetch';

const AUTH_TOKEN_KEY = 'authtoken';
let authToken = '';

function setAuthToken(token) {
    authToken = `Bearer ${token}`;
    if (localStorage) {                                         // checking browser's ability to store the auth token to use for each logged in request
        localStorage.setItem(AUTH_TOKEN_KEY, authToken);        // saves auth token in local storage
    }
}

function clearAuthToken() {
    authToken = '';
    if (localStorage) {
        localStorage.removeItem(AUTH_TOKEN_KEY);
    }
}

function populateAuthToken() {                      
    if (localStorage) {
        let token = localStorage.getItem(AUTH_TOKEN_KEY);       // checks if the token was previously saved in local storage
        if (token && token !== null) {
            authToken = token;                                  // re-populates authToken variable with what local storage saved
        }
    }
}

function makeFetch(url, info) {
    return fetch(url, info);
}

function json(url, method = 'GET', payload = {}) {
    let data = {
        method,
        body: JSON.stringify(payload),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': authToken
        })
    };

    if (method === 'GET' || method === 'DELETE') {
        delete data.body;
    }

    return makeFetch(url, data)
        .then((response) => {
            if (response.ok) {
                let contentType = response.headers.get('Content-Type');
                if (contentType.indexOf('application/json') > -1) {
                    return response.json();
                }
                return response.statusText;
            }
            throw response;
        });
}

function get(url) {
    return json(url);
}

function post(url, payload) {
    return json(url, 'POST', payload);
}

function put(url, payload) {
    return json(url, 'PUT', payload);
}

function destroy(url, payload) {
    return json(url, 'DELETE', payload);
}

export {
    setAuthToken,
    populateAuthToken,
    clearAuthToken,
    get,
    post,
    put,
    destroy,
    makeFetch
};