import { StudentData } from "@/interfaces/student";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  reducerPath: "api",
  tagTypes:["Students","CompanyCars"],
  endpoints: (build) => ({
    addStudents: build.mutation({
      query: (newStudent:StudentData) => ({
        url: "students/add_student",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["Students"]
    }),
    getStudents:build.query({
       query:()=>"students/fetch_student",
       transformResponse: (response: { data }) => response.data,
       providesTags:["Students"]
    }),
    getSearchStudent:build.query({
       query:(name)=>`students/search_student?name=${name}`
    }),
    getAllCars:build.query({
       query:()=>"companycar/get_cars",
       providesTags:["CompanyCars"]
    })
  }),
});

export const {useAddStudentsMutation,useGetStudentsQuery,useGetSearchStudentQuery,useGetAllCarsQuery} = api;
