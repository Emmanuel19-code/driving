import { StudentData } from "@/interfaces/student";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  reducerPath: "api",
  tagTypes:["Students"],
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
       query:(name)=>`/search_student?name=${name}`
    })
  }),
});

export const {useAddStudentsMutation,useGetStudentsQuery,useGetSearchStudentQuery} = api;
