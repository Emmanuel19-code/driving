"use client";
import React, { useState } from "react";

type FormProps = {
  onCreate: (formData) => void;
};

const RecordForm = ({ onCreate }: FormProps) => {
  const [formData, setFormData] = useState({
    carNumber: "",
    amountPurchased: "",
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
    <div>
      <form className="mb-2" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="w-full md:w-[32%]">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Car
            </label>
            <select
              value={formData.carNumber}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  block w-full p-1"
            >
              <option selected>Choose car</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="w-full md:w-[32%]">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Enter amount*
            </label>
            <input
              type="text"
              name="gender"
              onChange={handleChange}
              value={formData.amountPurchased}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
              placeholder="enter amount"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-end">
          <button className="text-[#302394] cursor-pointer border-[#302394] rounded border-2 py-1 px-5">
            Save & Exit
          </button>
          <button
            type="submit"
            className="w-full sm:w-32 bg-[#302394] text-white text-sm rounded cursor-pointer py-2 border"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecordForm;
