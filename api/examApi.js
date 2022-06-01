import { axiosClient } from './axiosClient';

const BASE_URL = '/exam';

export const APIGetListQuestions = () => {
  const url = BASE_URL + `/get-exam`;
  return axiosClient.get(url);
};

export const APISaveExamScore = (data) => {
  const url = BASE_URL + `/save-exam`;
  return axiosClient.post(url, data)
}

export const APIGetBestScore = (data) => {
  const url = BASE_URL + `/save-exam`;
  return axiosClient.post(url, data)
}
