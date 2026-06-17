export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  companyName: string;
  serviceRequired: string;
  message: string;
}
