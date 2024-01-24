import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'user/register',
  login: 'user/login',
  journey: 'post',
  getDetailJourney: 'post/detail/'
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');

export const register = (user) => {
  return callAPI(urls.register, 'POST', {}, {}, user);
}
export const login = (login) => {
  return callAPI(urls.login, 'POST', {}, {}, login);
}

export const fetchJourney = () => callAPI(urls.journey, 'GET');

export const fetchJourneyDetail = (id) => callAPI(`${urls.getDetailJourney}${id}`, 'GET')