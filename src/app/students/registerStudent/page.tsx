"use client"
import { StudentData } from "@/interfaces/student";
import { useAddStudentsMutation } from "@/state/api";
import React from "react";
import Form from "./form";

const RegisterPage = () => {
  const [createStudent] = useAddStudentsMutation();
  const handleCreateStudent = async (studentData:StudentData)=>{
    await createStudent(studentData);
  }
  return (
    <div className="w-full bg-red-500">
      <div className="px-4 sm:px-8 lg:ml-72 lg:mr-4 mt-2">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <h4 className="text-3xl font-medium">Register Student</h4>
        </div>
        <div className="bg-white mt-4 rounded">
          <h4 className="bg-[#302394] text-white rounded p-3">
            Information
          </h4>
          <div className="p-1">
            <Form onCreate={handleCreateStudent}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
