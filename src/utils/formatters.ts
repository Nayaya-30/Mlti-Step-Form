// Utility functions for form validation
export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const formatCurrency = (amount: number, isYearly: boolean = false): string => {
  return `${isYearly ? '$' : ''}${amount}${isYearly ? '/yr' : '/mo'}`;
};