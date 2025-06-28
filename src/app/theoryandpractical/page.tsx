"use client";
import React, { useState } from "react";
import StudentInClass from "./studentInClass";
import StudentInPracticalSession from "./studentInPracticalSession";

const TheoryPractical = () => {
  const [switchView, setSwitchView] = useState("in_class");
  return (
    <div className="p-2 ">
      <div className="flex flex-row items-center space-x-4 cursor-pointer">
        <p onClick={() => setSwitchView("in_class")}>Students In Class</p>
        <p onClick={() => setSwitchView("in_practicals")}>
          Students In Practicals
        </p>
      </div>
      <div className="mt-2">
        {switchView == "in_class" ? (
          <StudentInClass />
        ) : (
          <StudentInPracticalSession />
        )}
      </div>
    </div>
  );
};

export default TheoryPractical;
