export enum UserGender {
  MAN = "MAN",
  WOMAN = "WOMAN"
}
export interface UserInterface {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber?: number;
  dob: string;
  gender: UserGender;
}

export interface UserValidateInterface {
  validateNumber: number;
  email: string;
}

export interface LoginInterface {
  password: string;
  email: string;
}

export interface resetPasswordInterface {
  email: string;
}

export interface setNewResetPasswordInterface {
  email: string;
  token: string;
  newPassword: string;
}

export interface updateInfoInterface {
  name?: string;
  lastname?: string;
  dob?: Date;
}

export interface authedChangePassInterface {
  newPassword: string;
  oldPassword: string;
}
