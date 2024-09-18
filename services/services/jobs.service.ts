import { customRequest } from './axios/custom-request';

const PREFIX = 'jobs';

export enum WorkplaceTypeEnum {
  ON_SITE = 'on_site',
  REMOTE = 'remote',
  HYBRID = 'hybrid',
}

export enum JobTypeEnum {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
  CONTRACT = 'contract',
  TEMPORARY = 'temporary',
  VOLUNTEERING = 'volunteering',
  INTERNSHIP = 'internship',
}

export enum PostTypeEnum {
  COMPANY = 'company',
  USER = 'user',
  GROUP = 'group',
}

export interface CreateJobDto {
  title: string;
  workplaceType: WorkplaceTypeEnum;
  jobType: JobTypeEnum;
  closingAt: Date;
  location: string;
  body: string;
  isActiveRecruit: boolean;
  industry: string;
  postType: PostTypeEnum;
  company?: string;
  requiredSkills: string[];
}

export interface UpdateJobDto {
  title: string;
  workplaceType: WorkplaceTypeEnum;
  jobType: JobTypeEnum;
  closingAt: string;
  location: string;
  body: string;
  isActiveRecruit: boolean;
  industry: string;
  postType: PostTypeEnum;
  company: string;
}

export interface GetAllJobParam {
  title?: string;
}

export const jobService = {
  // addJobs: async (data: CreateJobs) => {
  //   const response = await customRequest.post(`${PREFIX}`, data);
  //   return response.data;
  // },
  getMeAppliedJobs: async () => {
    const response = await customRequest.get(`${PREFIX}/applicants/me`);

    return response.data;
  },
  getMeCreatedJobs: async () => {
    const response = await customRequest.get(`${PREFIX}/author/me`);

    return response.data;
  },
  getJobs: async (param: GetAllJobParam) => {
    const request = await customRequest.get(`${PREFIX}`, {
      params: {
        ...(param.title && { title: param.title }),
      },
    });
    return request.data;
  },
  getJobById: async (id: string) => {
    const request = await customRequest.get(`${PREFIX}/${id}`);
    return request.data;
  },
  createJob: async (data: CreateJobDto) => {
    const response = await customRequest.post(`${PREFIX}`, data);

    return response.data;
  },
  updateJob: async (id: string, data: UpdateJobDto) => {
    const response = await customRequest.patch(`${PREFIX}/${id}`, data);

    return response.data;
  },
  removeJob: async (id: string) => {
    const response = await customRequest.delete(`${PREFIX}/${id}`);

    return response.data;
  },
  publishJob: async (id: string) => {
    const response = await customRequest.patch(`${PREFIX}/${id}/publish`);

    return response.data;
  },
  closeJob: async (id: string) => {
    const response = await customRequest.patch(`${PREFIX}/${id}/close`);

    return response.data;
  },
  applyJob: async (id: string) => {
    const response = await customRequest.patch(`${PREFIX}/${id}/apply`);

    return response.data;
  },
  addSkill: async (id: string, skillId: string) => {
    const response = await customRequest.patch(`${PREFIX}/${id}/add/skill`, {
      skillId: skillId,
    });
    return response.data;
  },
  removeSkill: async (id: string, skillId: string) => {
    const response = await customRequest.patch(`${PREFIX}/${id}/remove/skill`, {
      skillId: skillId,
    });
    return response.data;
  },
};
