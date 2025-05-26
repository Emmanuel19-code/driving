"use client";
import LoadingIndicator from "@/components/loadingIndicator";
import { useRouter } from "next/navigation";
import React from "react";

const AddStaff = () => {
  const router = useRouter();
  return (
    <div className="max-w-full">
      <div className="mt-4 ml-72 mr-4 bg-white rounded-md p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-medium">Add Instructors/Admins</h4>
          <div className="flex items-center space-x-2">
            <div
              className="w-32 flex items-center cursor-pointer justify-center bg-red-500/70  text-sm rounded-md py-2 border"
              onClick={() => router.push("/instructors")}
            >
              <p className="text-white font-medium">Cancel</p>
            </div>
          </div>
        </div>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-md px-3 py-2  focus:ring-blue-500"
              placeholder="Enter full name"
              required
            />
          </div>
            <div>
            <label className="block text-sm font-medium mb-1">Phone One</label>
            <input
              type="text"
              name="phoneOne"
              className="w-full border rounded-md px-3 py-2  "
              placeholder="Enter PhoneOne"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">PhoneTwo</label>
            <input
              type="text"
              name="phoneOne"
              className="w-full border rounded-md px-3 py-2  "
              placeholder="Enter PhoneOne"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-md px-3 py-2  "
              placeholder="Enter email address"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              name="role"
              className="w-full border rounded-md px-3 py-2  "
              required
            >
              <option value="">Select role</option>
              <option value="driving_instructor">Driving Instructor</option>
              <option value="class_instructor">Class Instructor</option>
              <option value="both">Both</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className={`w-full bg-[#302394]/70 text-white font-semibold py-2 rounded`}
            >
              <LoadingIndicator/>
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
