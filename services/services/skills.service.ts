import { customRequest } from './axios/custom-request';

const PREFIX = 'skills';

export interface CreateSkillDto {
  name: string;
  description: string;
}

export interface UpdateSkillDto {
  name: string;
  description: string;
}

export const skillService = {
  createSkill: async (data: CreateSkillDto) => {
    const response = await customRequest.post(`${PREFIX}/skills`, data);

    return response.data;
  },
  updateSkill: async (id: string, data: UpdateSkillDto) => {
    const response = await customRequest.patch(`${PREFIX}/skills/${id}`, data);

    return response.data;
  },
  getAll: async () => {
    const response = await customRequest.get(`${PREFIX}`);

    return response.data;
  },
  getSkillById: async (id: string) => {
    const response = await customRequest.get(`${PREFIX}/skills/${id}`);

    return response.data;
  },
  deleteSkill: async (id: string) => {
    const response = await customRequest.delete(`${PREFIX}/skills/${id}`);

    return response.data;
  },
};
