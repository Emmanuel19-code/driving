import React from "react";

const RecordPayment = () => {
  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8">
      <div className="mt-4 lg:ml-72 bg-white rounded-lg ">
        <h4 className="bg-[#302394] rounded-t-lg p-2 text-white px-4">
          Record Payment
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

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="w-full md:w-[32%]">
                <label
                  htmlFor="payment_date"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Payment Date
                </label>
                <input
                  type="date"
                  id="payment_date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                  required
                />
              </div>
              <div className="w-full md:w-[32%]">
                <label
                  htmlFor="amount_paid"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Amount Paid
                </label>
                <input
                  type="number"
                  id="amount_paid"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                  placeholder="100"
                  min={0}
                  required
                />
              </div>
              <div className="w-full md:w-[32%]">
                <label
                  htmlFor="payment_method"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Payment Method*
                </label>
                <select
                  id="payment_method"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                  required
                >
                  <option value="">Select method</option>

                  <option value="cash">Cash</option>
                  <option value="mobile_money">Mobile Money</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Reason for payment
                </label>
                <textarea
                  id="message"
                  rows={4}
                  cols={25}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  placeholder="Type here..."
                ></textarea>
              </div>
              <div className="w-full md:w-[32%]">
                <label
                  htmlFor="amount_paid"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Enter Email
                </label>
                <input
                  type="text"
                  id="amount_paid"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
          </form>

          <div className="flex justify-end space-x-2 mt-4">
            <button className="w-32 border-2 py-1 rounded-md border-[#302394] text-[#302394] hover:bg-[#f0f0f0] transition">
              Cancel
            </button>
            <button className="w-32 border py-1 rounded-md bg-[#302394] text-white hover:bg-[#241b73] transition">
              Save Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordPayment;

//lobah
//34j0ul1g
