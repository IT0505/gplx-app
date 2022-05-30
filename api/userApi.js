import { axiosClient } from './axiosClient';

const BASE_URL = '/user';

export const APILogin = (data) => {
  const url = BASE_URL + `/login`;
  return axiosClient.post(url, data);
};

export const APIRegister = (data) => {
  const url = BASE_URL + `/register`;
  return axiosClient.post(url, data);
};
