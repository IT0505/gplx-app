import { axiosClient } from './axiosClient';

const BASE_URL = '/review';

export const APIGetListQuestions = (data) => {
  const url = BASE_URL + `/get-review`;
  return axiosClient.get(url, { params: data });
};

export const APISaveReview = (data) => {
  const url = BASE_URL + `/save-review`;
  return axiosClient.post(url, data);
};
