import React, { useState } from "react";

const TimesCard = ({slot}) => {
    const [assign,setAssign] = useState(false)
    const handleClick = () =>{
        if(!slot.isBooked)
        {
            setAssign(true)
        }
    }
  return (
    <div>
      {assign ? (
        <div className="w-full bg-yellow-50 py-0.5 flex flex-col justify-between items-center  rounded shadow-sm">
          <p>hello</p>
        </div>
      ) : (
        <div
          className="w-full bg-yellow-50 py-0.5 flex flex-col justify-between items-center  rounded shadow-sm"
          key={slot.timeSlotId}
          onClick={handleClick}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm text-gray-600 py-1 px-3  rounded-full">
              {slot.isBooked ? "Booked" : "Free"}
            </p>
            {/*
                            <p className="text-sm font-inter mt-2 text-gray-700 text-center">
                          Emma: 2 Guests
                        </p>
                            */}
          </div>
          <p className="text-sm font-inter text-[#302394] font-semibold mt-3">
            {slot.startTime} - {slot.endTime}
          </p>
        </div>
      )}
    </div>
  );
};

export default TimesCard;
