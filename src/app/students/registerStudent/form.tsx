import { StudentData } from "@/interfaces/student";
import React, { ChangeEvent, FormEvent, useState } from "react";

type FormProps = {
  onCreate: (formData: StudentData) => void;
};

const Form = ({ onCreate }: FormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    gender: "",
    email: "",
    phoneOne: "",
    phoneTwo: "",
    serviceType: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onCreate(formData);
  };
  return (
    <form className="mb-2" onSubmit={handleSubmit}>
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
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
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
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
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
            name="otherName"
            value={formData.otherName}
            onChange={handleChange}
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
            name="gender"
            onChange={handleChange}
            value={formData.gender}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="john@example.com"
          />
        </div>
        <div className="w-full md:w-[32%]">
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Main Number
          </label>
          <input
            type="text"
            name="phoneOne"
            value={formData.phoneOne}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="+123456789"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-5">
        <div className="w-full md:w-[32%]">
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Second Phone Number
          </label>
          <input
            type="text"
            name="phoneTwo"
            value={formData.phoneTwo}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="+123456789"
          />
        </div>
        <div className="w-full md:w-[32%]">
          <label
            htmlFor="service_type"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Service Type
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            required
          >
            <option value="">Service Type</option>
            <option value="normal">Normal</option>
            <option value="intensive">Intensive</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-end">
        <button className="text-[#302394] cursor-pointer border-[#302394] rounded border-2 py-1 px-5">
          Save & Exit
        </button>
        <button type="submit" className="w-full sm:w-32 bg-[#302394] text-white text-sm rounded cursor-pointer py-2 border">
          Save & Continue
        </button>
      </div>
    </form>
  );
};

export default Form;
