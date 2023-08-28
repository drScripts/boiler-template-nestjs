import { Attachment } from 'src/lib';

export class User {
  _id: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  isEmailVerified: boolean;
  phoneNumber: string;
  role: string[];
  fullName: string;
  bloodType: string;
  placeOfBirth: string;
  martialStatus: string;
  establishmentDate: string;
  yearCardIdIssued: string;
  selfiePicture: Attachment[];
  signature: Attachment[];
  nik: string;
  accessAttempt: number;
  pin: string;
}
