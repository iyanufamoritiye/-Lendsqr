import { ReactNode } from 'react';
export interface BaseModel {
  id: string;
  created_at?: string;
  updated_at?: string;
}
export interface MenuItem {
  icons: ReactNode;
  key: string;
  label: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  Username: string;
  email: string;
  phone: number;
  gender: string;
  marital_status: string;
  residenceType: string;
}
export interface Professional_info {
  organization: string;
  level_of_education: string;
  employement_status: 'selfemployed' | 'unemployed' | 'employed' | 'Student';
  sector_of_employement: string;
  official_email: string;
  duration_of_employment: string;
  monthly_income: string;
  loan_repayment: string;
}
export interface Socials_info {
    facebook?: string;
    instagram?: string;
    twitter?: string;
}
export interface Ganrator {
  fullname: string;
  email: string;
  phone: number;
  relationship: string;
}
export interface UserData extends BaseModel {
  profile: Profile;
  professional_info: Professional_info;
  socials: Socials_info;
  status: 'inactive' | 'pending' | 'blocked' | 'active';
  garantors: Ganrator[];
}
