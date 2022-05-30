import { axiosClient } from './axiosClient';

const BASE_URL = '/exam';

export const APIGetListQuestions = () => {
  const url = BASE_URL + `/get-exam`;
  return axiosClient.get(url);
};
