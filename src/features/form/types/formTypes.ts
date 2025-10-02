// Form-related types
export interface FormData {
  // Define your form data structure here
  name: string;
  email: string;
  phone: string;
}

export interface FormStepProps {
  onNext: () => void;
  onPrev: () => void;
}