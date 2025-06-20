import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
  accessToken: string | null;
  refreshToken?: string | null;
  user?: any;
}

const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
  accessToken: null,
  refreshToken: null,
  user: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
    setAuthData: (
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken?: string;
        user?: any;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken ?? null;
      state.user = action.payload.user ?? null;
    },
  },
});

export const {
  setIsSidebarCollapsed,
  setIsDarkMode,
  setAccessToken,
  clearAccessToken,
  setAuthData,
} = globalSlice.actions;

export default globalSlice.reducer;
