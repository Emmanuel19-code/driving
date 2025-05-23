import React from "react";

const RegisterPage = () => {
  return (
    <div className="max-w-full">
      <div className="px-4 sm:px-8 lg:ml-72 lg:mr-4 mt-2">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <h4 className="text-3xl font-medium">Register Student</h4>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="text-[#302394] cursor-pointer border-[#302394] rounded border-2 py-1 px-5">
              Save & Exit
            </button>
            <button className="w-full sm:w-32 bg-[#302394] text-white text-sm rounded cursor-pointer py-2 border">
              Save & Continue
            </button>
          </div>
        </div>
        <div className="bg-white mt-4 rounded">
          <h4 className="bg-[#302394] text-white rounded-t-lg p-3">
            Information
          </h4>
          <div className="p-4">
            <form className="mb-2">
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="w-full md:w-[32%]">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    First name*
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="w-full md:w-[32%]">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last name*
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div className="w-full md:w-[32%]">
                  <label
                    htmlFor="other_names"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Other names*
                  </label>
                  <input
                    type="text"
                    id="other_names"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                    placeholder="Michael"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="w-full md:w-[32%]">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Gender*
                  </label>
                  <input
                    type="text"
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                    placeholder="Male"
                    required
                  />
                </div>
                <div className="w-full md:w-[32%]">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="w-full md:w-[32%]">
                  <label
                    htmlFor="contact"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Contact*
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                    placeholder="+123456789"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-5">
                <div className="w-full md:w-[32%]">
                  <label
                    htmlFor="service_type"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Service Type
                  </label>
                  <select
                    id="service_type"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                    required
                  >
                    <option value="">Service Type</option>
                    <option value="normal">Normal</option>
                    <option value="intensive">Intensive</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
