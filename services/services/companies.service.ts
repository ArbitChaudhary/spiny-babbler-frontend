import { customRequest } from './axios/custom-request';

const PREFIX = 'companies';

export interface createCompanyDto {
  name: string;
  headline: string;
  description: string;
  websiteUrl: string;
  address: string;
  industry: string;
  foundationDate: Date;
  creator: string;
}

export const companyService = {
  addCompany: async (data: createCompanyDto) => {
    const response = await customRequest.post(`${PREFIX}`);
    return response.data;
  },
};
