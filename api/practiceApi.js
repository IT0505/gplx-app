import { axiosClient } from './axiosClient';

const BASE_URL = '/practice';

export const APIGetListQuestions = (data) => {
  const url = BASE_URL + `/get-list-question`;
  return axiosClient.get(url, { params: data });
};
