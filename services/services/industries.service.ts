import { customRequest } from './axios/custom-request';

const PREFIX = 'industries';

export const industryService = {
  getAll: async () => {
    const response = await customRequest.get(`${PREFIX}`);
    return response.data;
  },
};
