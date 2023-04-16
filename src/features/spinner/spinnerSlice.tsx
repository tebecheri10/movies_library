import { createSlice } from '@reduxjs/toolkit';

export interface SpinnerState {
  showSpinner: boolean
}

const initialState: SpinnerState = {
    showSpinner: false
};

export const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    setSpinnerValue: (state, action)=>{
        state.showSpinner = action.payload
    }
  }
});

export const { setSpinnerValue } = spinnerSlice.actions
export default spinnerSlice.reducer;
