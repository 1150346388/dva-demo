import fetch from 'dva/fetch';
import config from './config';

function parseJSON(response) {
  return response.json();
}

export function fetchGet(url, param) {
  return request(url, 'GET')
}

export function fetchPost(url, param) {
  return request(url, 'POST', param)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error['response'] = response;
  throw error;
}

const assyParams = (obj) => {
  let str = ''
  for (let key in obj) {
    const value = typeof obj[key] !== 'string' ? JSON.stringify(obj[key]) : obj[key]
    str += '&' + key + '=' + value
  }
  return str.substr(1)
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(url, method, params) {
  let headers = {
    Accept: '*/*',
  }
  if (method.toLowerCase() === 'post') {
    headers['Content-Type'] = 'application/json'
  }
  return fetch(url, {
    // credentials: 'include',
    mode: 'cors',
    method: method,
    headers: headers,
    body: JSON.stringify(params),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => err);
}
