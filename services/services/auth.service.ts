import { customRequest } from './axios/custom-request';

//TODO: create a class based service file
const PREFIX = 'auth';
export interface SignInDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  firstName: string;
  familyName: string;
  email: string;
  headline: string;
  address: string;
  contactNumber: number;
  dateOfBirth: Date;
  aboutMe: string;
  password: string;
}

export interface FirstTimeSetupDto {
  firstName: string;
  familyName: string;
  headline: string;
  address: string;
  firebaseUid: string;
  contactNumber: number;
  dateOfBirth: Date;
  aboutMe: string;
}

export const authService = {
  signIn: async ({ email, password }: SignInDto) => {
    const response = await customRequest.post(`${PREFIX}/login`, {
      email,
      password,
    });

    return response.data;
  },
  register: async (data: RegisterDto) => {
    const response = await customRequest.post(`${PREFIX}/register`, data);

    return response.data;
  },
  firstTimeSetup: async (data: FirstTimeSetupDto) => {
    const response = await customRequest.post(
      `${PREFIX}/first-time-setup`,
      data
    );

    return response.data;
  },
  refreshToken: async (token: string) => {
    const response = await customRequest.post(`${PREFIX}/refresh-token`, {
      refreshToken: token,
    });

    return response;
  },
  registerDevice: async (token: string) => {
    const response = await customRequest.post(`${PREFIX}/register-device`, {
      deviceToken: token,
    });

    return response;
  },
  removeDevice: async (token: string) => {
    const response = await customRequest.post(`${PREFIX}/remove-device`, {
      deviceToken: token,
    });

    return response;
  },
};
