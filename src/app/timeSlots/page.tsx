"use client";
import { groupTimeSlots } from "@/lib/groupTimeSlot";
import { useGetTimeSlotsQuery } from "@/state/api";
import React from "react";

const TimeSlotPage = () => {
  const { data, isError, isLoading } = useGetTimeSlotsQuery();

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError || !data?.slots)
    return <div className="p-4 text-red-500">Error fetching time slots</div>;

  const grouped = groupTimeSlots(data.slots); // now returns [day, slots[]][]

  return (
    <div className="bg-white p-2 sm:p-4 h-full sm:h-screen overflow-y-auto scrollbar-hide">
      <h4 className="border-b border-gray-300 py-1 cursor-pointer text-[#302394] font-bold text-lg">
        Time Slots
      </h4>
      <div>
        {grouped.map(([day, slots]) => (
          <div key={day} className="mb-6 border-b border-gray-300 pb-2">
            <h5 className="font-semibold text-lg capitalize text-[#302394] mb-3">
              {day}
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {slots.map((slot) => (
                <div
                  className="w-full bg-yellow-50 py-0.5 flex flex-col justify-between items-center  rounded shadow-sm"
                  key={slot.timeSlotId}
                >
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-sm text-gray-600 py-1 px-3  rounded-full">
                      {slot.isBooked ? "Booked" : "Free"}
                    </p>
                    {
                        /*
                        <p className="text-sm font-inter mt-2 text-gray-700 text-center">
                      Emma: 2 Guests
                    </p>
                        */
                    }
                    
                  </div>
                  <p className="text-sm font-inter text-[#302394] font-semibold mt-3">
                    {slot.startTime} - {slot.endTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPage;
