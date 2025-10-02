import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  // Define your form state structure here
  currentStep: number;
}

const initialState: FormState = {
  currentStep: 1,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { nextStep, prevStep, setCurrentStep } = formSlice.actions;

export default formSlice.reducer;