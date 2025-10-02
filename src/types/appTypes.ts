// Global application types
export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface PlanOption {
  id: number;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  icon: string;
}

export interface Addon {
  id: number;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
}