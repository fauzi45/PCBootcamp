import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'user/register',
  login: 'user/login',

  journey: 'post',
  getDetailJourney: 'post/detail/',

  profile: 'user/get-profile',

  profilePost: 'post/my-post',
  createJourney: 'post/create',

  Allbookmark: 'bookmark',
  AddBookmark: 'bookmark/create',
  removeBookmark: 'bookmark/remove/',
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
};
export const login = (login) => {
  return callAPI(urls.login, 'POST', {}, {}, login);
};

export const fetchJourney = () => callAPI(urls.journey, 'GET');

export const fetchJourneyDetail = (id) => callAPI(`${urls.getDetailJourney}${id}`, 'GET');

export const fetchProfileData = () => callAPI(urls.profile, 'GET');
export const fetchProfileMyPost = () => callAPI(urls.profilePost, 'GET');

export const newJourney = (data) =>
  callAPI(urls.createJourney, 'POST', { 'Content-Type': 'multipart/form-data; charset=UTF-8' }, {}, data);

export const allBookmark = () => callAPI(urls.Allbookmark, 'GET');

export const AddBookmarkapi = (id) => callAPI(urls.AddBookmark, 'POST',{},{},{postId: id});

export const deleteBookmark = (id) => callAPI(`${urls.removeBookmark}/${id}`, 'DELETE');