import { useState } from 'react';

// Custom hook for form step management
export const useStepNavigation = (initialStep: number = 1, maxSteps: number = 4) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  
  const nextStep = () => {
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const goToStep = (step: number) => {
    if (step >= 1 && step <= maxSteps) {
      setCurrentStep(step);
    }
  };
  
  return {
    currentStep,
    nextStep,
    prevStep,
    goToStep,
  };
};