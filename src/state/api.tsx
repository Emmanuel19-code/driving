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
    "FuelRecords",
  ],
  endpoints: (build) => ({
    //adding students
    addStudents: build.mutation({
      query: (newStudent: StudentData) => ({
        url: "students/add_student",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["Students"],
    }),
    //getting students
    getStudents: build.query({
      query: () => "students/fetch_student",
      transformResponse: (response: { data }) => response.data,
      providesTags: ["Students"],
    }),
    //search students
    getSearchStudent: build.query({
      query: (name) => `students/search_student?name=${name}`,
    }),
    //get only the car registration number
    getAllCars: build.query({
      query: () => "companycar/get_car_registration_number",
      providesTags: ["CompanyCars"],
    }),
    //get all timeSlots generated
    getTimeSlots: build.query({
      query: () => "bookingAndslots/generated_slots",
      providesTags: ["TimeSlots"],
    }),
    //getting all added services
    getAllServices: build.query({
      query: () => "services/getAllServices",
      providesTags: ["Services"],
    }),
    //adding a service
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
    //updating service data
    updateService: build.mutation({
      query: ({ serviceId, ...updates }) => ({
        url: `services/update_service/${serviceId}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["Services"],
    }),
    getServicesNameAndId: build.query({
      query: () => "services/servicesId_and_name",
    }),
    getStudentNotStartedPractical: build.query({
      query: () => "students/practical-not-started",
    }),
    getStudentNamesAndId: build.query({
      query: () => "students/student_names_studentId_only",
    }),
    makePayment: build.mutation({
      query: (paymentData) => ({
        url: "payment/make_payment",
        method: "POST",
        body: paymentData,
      }),
    }),
    recordFuel: build.mutation({
      query: (recordData) => ({
        url: "companycar/record_fuel_refill",
        method: "POST",
        body: recordData,
      }),
      invalidatesTags: ["FuelRecords"],
    }),
    getFuelRecords: build.query({
      query: ({ startDate, endDate } = {}) => {
        const params = new URLSearchParams();
        if (startDate) params.append("startDate", startDate);
        if (endDate) params.append("endDate", endDate);

        return `companycar/all_fuel_records?${params.toString()}`;
      },
      providesTags: ["FuelRecords"],
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
    signIn: build.mutation({
      query: (credentials: LoginCredentials) => ({
        url: "system_security/login",
        method: "POST",
        body: credentials,
      }),
    }),
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
  useGetStudentNotStartedPracticalQuery,
  useGetStudentNamesAndIdQuery,
  useMakePaymentMutation,
  useRecordFuelMutation,
  useGetFuelRecordsQuery,
} = api;
