// src/state/customBaseQuery.ts
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { clearAccessToken, setAccessToken } from ".";


const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.accessToken;
    console.log("token",token)
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "include", // Send cookies (for refreshToken)
});

export const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // If access token is expired
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      "system_security/refresh-token",
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const newAccessToken = (refreshResult.data as any).accessToken;
      api.dispatch(setAccessToken(newAccessToken));
      // Retry original request with new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log("Refresh token failed. Logging out user.");
      api.dispatch(clearAccessToken());
      // Return a proper error structure to satisfy type requirements
      return {
        error: {
          status: 401,
          data: {
            message: "Session expired. Please log in again.",
          },
        },
      };
    }
  }

  return result;
};
