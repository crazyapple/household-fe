import type { RootState } from '../../store/store';
import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
};

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('isAuth') === '1' ?? false,
  isLoading: false,
};

export const AuthSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginSuccess: state => {
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loginFail: state => {
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const authActions = AuthSlice.actions;

export const selectAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectLoading = (state: RootState) => state.auth.isLoading;

export const auth = AuthSlice.reducer;
