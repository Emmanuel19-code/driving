// src/state/api.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { AddServiceData } from "@/interfaces/service";
import { StudentData } from "@/interfaces/student";
import { customBaseQuery } from "./customBaseQuery";
import { LoginCredentials } from "@/interfaces/auth";
import { clearAccessToken } from ".";

export const api = createApi({
  baseQuery: customBaseQuery,
  reducerPath: "api",
  tagTypes: [
    "Students",
    "CompanyCars",
    "TimeSlots",
    "Services",
    "CompletedTheory",
  ],
  endpoints: (build) => ({
    addStudents: build.mutation({
      query: (newStudent: StudentData) => ({
        url: "students/add_student",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["Students"],
    }),
    getStudents: build.query({
      query: () => "students/fetch_student",
      transformResponse: (response: { data }) => response.data,
      providesTags: ["Students"],
    }),
    getSearchStudent: build.query({
      query: (name) => `students/search_student?name=${name}`,
    }),
    getAllCars: build.query({
      query: () => "companycar/get_car_registration_number",
      providesTags: ["CompanyCars"],
    }),
    getTimeSlots: build.query({
      query: () => "bookingAndslots/generated_slots",
      providesTags: ["TimeSlots"],
    }),
    getAllServices: build.query({
      query: () => "services/getAllServices",
      providesTags: ["Services"],
    }),
    addService: build.mutation({
      query: (newService: AddServiceData) => ({
        url: "services/add_newService",
        method: "POST",
        body: newService,
      }),
      invalidatesTags: ["Services"],
    }),
    studentsCompletedTheory: build.query({
      query: () => "students/completed_theory_class",
      providesTags: ["CompletedTheory"],
    }),
    updateService: build.mutation({
      query: ({ serviceId, ...updates }) => ({
        url: `services/update_service/${serviceId}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["Services"],
    }),
    getServicesNameAndId:build.query({
      query:()=>"services/servicesId_and_name",
    }),
    getStudentNotStartedPractical:build.query({
       query:()=>"students/practical-not-started"
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "system_security/logout",
        method: "POST",
        credentials: "include",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearAccessToken());
        } catch (err) {
          console.error("Logout failed", err);
        }
      },
    }),
    signIn:build.mutation({
       query:(credentials:LoginCredentials)=>({
         url:"system_security/login",
         method:"POST",
         body:credentials
       })
    })
  }),
});

export const {
  useAddStudentsMutation,
  useGetStudentsQuery,
  useGetSearchStudentQuery,
  useGetAllCarsQuery,
  useGetTimeSlotsQuery,
  useGetAllServicesQuery,
  useAddServiceMutation,
  useStudentsCompletedTheoryQuery,
  useLogoutMutation,
  useSignInMutation,
  useUpdateServiceMutation,
  useGetServicesNameAndIdQuery,
  useGetStudentNotStartedPracticalQuery
} = api;
