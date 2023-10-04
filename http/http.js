import axios from 'axios';

/**
 * @param method
 * @param endpoint
 * @param data
 * @param config
 * @param headers
 * @param token
 * @returns {Promise<any|undefined|boolean>}
 * @usage
 *  `req(routeMethod, uri, fileData)`
 *
 * The config parameter in the Axios function wrappers refers to an optional configuration object
 * that can be passed to customize the behavior of the HTTP request. Some for example:
 *
 * - ***headers***: An object of key-value pairs representing the HTTP headers to be included in the request.
 * - ***params***: An object of key-value pairs representing the URL query parameters to be included in the request.
 * - ***timeout***: The maximum amount of time (in milliseconds) that the request can take before timing out.
 * - ***auth***: An object with username and password properties representing basic authentication credentials to be included in the request.
 * - ***responseType***: The expected response data type (e.g. 'json', 'text', 'blob', etc.).
 *
 * @example
 * const config = {
 *   headers: {
 *     Authorization: 'Bearer jwt-token',
 *     'Content-Type': 'application/json'
 *   },
 *   params: { limit: 10, offset: 0 }
 * };
 */
export const req = async (method, endpoint, data = null, config = {}, headers = {}, token=null) => {
    const _endpt = endpoint;
    const _cfg = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...headers
        },
        ...config,
    };

    switch (method.trim().toUpperCase()) {
        case "GET": return get(_endpt, _cfg)
        case "PUT": return put(_endpt, data, _cfg)
        case "POST": return post(_endpt, data, _cfg)
        case "DELETE": return del(_endpt, _cfg)
    }
    return false;
}

/**
 * get is a wrapper for GET requests
 * @example
 * const data = await get('/api/resource');
 */
const get = async (endpoint, config = {}) => {
    try {
        return await axios.get(endpoint, config);
    } catch (error) {
        throw error;
    }
};

/**
 * put is a wrapper for PUT requests
 * @example
 * const updatedData = await put('/api/resource/123', { baz: 'qux' });
 */
const put = async (endpoint, data = {}, config = {}, multipart = false) => {
    try {
        return await axios.put(endpoint, data, config);
    } catch (error) {
        throw error;
    }
};

/**
 * post is a wrapper for POST requests
 * @example
 * const response = await post('/api/resource', { foo: 'bar' });
 */
const post = async (endpoint, data = {}, config = {}) => {
    try {
        return await axios.post(endpoint, data, config);
    } catch (error) {
        throw error;
    }
};

/**
 * delete is a wrapper for DELETE requests
 * @example
 * await del('/api/resource/123');
 */
const del = async (endpoint, config = {}) => {
    try {
        return await axios.delete(endpoint, config);
    } catch (error) {
        throw error;
    }
};