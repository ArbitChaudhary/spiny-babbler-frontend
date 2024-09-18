import axios from 'axios';
import { customRequest } from './axios/custom-request';

const PREFIX = 'users';

export interface UpdateProfileDto {
  firstName: string;
  familyName: string;
  email: string;
  isEmailVerified: boolean;
  isDisabled: boolean;
  headline: string;
  address: string;
  contactNumber: number;
  dateOfBirth: Date;
  aboutMe: string;
}

export interface AddEducationDto {
  context: string;
  instituteName: string;
  startDate: Date;
  endDate: Date;
}
export interface AddExperienceDto {
  context: string;
  companyName: string;
  startDate: Date;
  endDate: Date;
}

export interface UpdateEductionDto {
  context: string;
  instituteName: string;
  startDate: Date;
  endDate: Date;
}
export interface AddSkills {
  name: string;
  description: string;
}

export const userService = {
  getProfile: async () => {
    const response = await customRequest.get(`${PREFIX}/me`);
    return response.data;
  },

  getUsers: async () => {
    const response = await axios.get(`${PREFIX}`);
    return response.data;
  },
  updateProfile: async (data: UpdateProfileDto) => {
    const response = await customRequest.patch(`${PREFIX}/me`, data);

    return response.data;
  },
  getUserSelfFollowedCompanies: async () => {
    const response = await customRequest.get(`${PREFIX}/me/followed/companies`);

    return response.data;
  },
  getUserSelfJoinedGroups: async () => {
    const response = await customRequest.get(`${PREFIX}/me/joined/groups`);

    return response.data;
  },
  getUserSelfConnectionRequests: async () => {
    const response = await customRequest.get(
      `${PREFIX}/me/connection-requests`
    );

    return response.data;
  },
  getUserSelfConnections: async () => {
    const response = await customRequest.get(`${PREFIX}/me/connections`);

    return response.data;
  },
  getById: async (id: string) => {
    const response = await customRequest.get(`${PREFIX}/${id}`);
    return response.data;
  },
  getAllUsers: async () => {
    const response = await customRequest.get(`${PREFIX}`);
    return response.data;
  },
  getUserFollowedCompanies: async (id: string) => {
    const response = await customRequest.get(
      `${PREFIX}/${id}/followed/companies`
    );
    return response.data;
  },
  getUserJoinedGroups: async (id: string) => {
    const response = await customRequest.get(`${PREFIX}/${id}/joined/groups`);
    return response.data;
  },
  addSkill: async (skillId: string) => {
    const response = await customRequest.patch(`${PREFIX}/me/add/skill`, {
      skillId,
    });
    return response.data;
  },
  removeSkill: async (skillId: string) => {
    const response = await customRequest.patch(`${PREFIX}/me/remove/skill`, {
      skillId,
    });
    return response.data;
  },
  addEducation: async (data: AddEducationDto) => {
    const response = await customRequest.patch(
      `${PREFIX}/me/add/education`,
      data
    );
    return response.data;
  },
  updateEduction: async (educationId: string, data: UpdateEductionDto) => {
    const response = await customRequest.patch(
      `${PREFIX}/me/update/educations/${educationId}`,
      data
    );
    return response.data;
  },
  removeEducation: async (educationId: string) => {
    const response = await customRequest.patch(
      `${PREFIX}/me/remove/educations`,
      {
        educationId,
      }
    );
    return response.data;
  },

  addExperience: async (data: AddExperienceDto) => {
    const response = await customRequest.patch(
      `${PREFIX}/me/add/experience`,
      data
    );
    return response.data;
  },
  follow: async (followedUserId: string) => {
    const response = await customRequest.post(`${PREFIX}/me/follow`, {
      followedUserId,
    });
    return response.data;
  },
  unFollow: async (followedUserId: string) => {
    const response = await customRequest.post(`${PREFIX}/me/un-follow`, {
      followedUserId,
    });
    return response.data;
  },
  sendConnectionRequest: async (connectionId: string) => {
    const response = await customRequest.post(
      `${PREFIX}/me/connection-requests/send`,
      {
        connectionId,
      }
    );
    return response.data;
  },
  acceptConnectionRequest: async (connectionId: string) => {
    const response = await customRequest.post(
      `${PREFIX}/me/connection-requests/accept`,
      {
        connectionId,
      }
    );
    return response.data;
  },
  rejectConnectionRequest: async (connectionId: string) => {
    const response = await customRequest.post(
      `${PREFIX}/me/connection-requests/reject`,
      {
        connectionId,
      }
    );
    return response.data;
  },
  removeConnection: async (connectionId: string) => {
    const response = await customRequest.post(
      `${PREFIX}/me/remove/connections`,
      {
        connectionId,
      }
    );
    return response.data;
  },
  saveJob: async (jobId: string) => {
    const response = await customRequest.post(`${PREFIX}/me/saved-jobs`, {
      jobId,
    });
    return response.data;
  },
  unSaveJob: async (jobId: string) => {
    const response = await customRequest.post(
      `${PREFIX}/me/saved-jobs/unsave`,
      {
        jobId,
      }
    );
    return response.data;
  },
  getUserSavedJobs: async () => {
    const response = await customRequest.get(`${PREFIX}/me/saved-jobs`);
    return response.data;
  },
};
