import axios from 'axios';
import { BACKEND_URL } from '../../constant/apiEndPoints';

export const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
    headers: {
      Authorization: 'Bearer QWlzaHdhcnlhIE4=',
    },
  };
  const { data } = await axios(requestDetails);
  return data;
};
