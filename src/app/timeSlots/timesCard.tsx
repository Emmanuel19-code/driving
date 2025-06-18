"use client";

import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { useStudentsCompletedTheoryQuery } from "@/state/api";

const TimesCard = ({ slot }) => {
  const [assign, setAssign] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState("");

  const { data: students, isLoading, isError } = useStudentsCompletedTheoryQuery();

  const handleClick = () => {
    if (!slot.isBooked) {
      setAssign(true);
    }
  };

  const handleStudentChange = (event: SelectChangeEvent) => {
    setSelectedStudentId(event.target.value);
  };

  const handleAssign = () => {
    if (!selectedStudentId) return alert("Please select a student.");

    alert(
      `Assigned student ID ${selectedStudentId} to slot ${slot.startTime} - ${slot.endTime}`
    );

    setAssign(false);
    setSelectedStudentId("");
  };

  const handleCancel = () => {
    setAssign(false);
    setSelectedStudentId("");
  };

  return (
    <div>
      {assign ? (
        <div className="w-full bg-yellow-50 py-3 px-3 flex flex-col justify-between items-center rounded shadow-sm">
          <FormControl fullWidth size="small">
            <InputLabel>Select Student</InputLabel>
            <Select
              value={selectedStudentId}
              onChange={handleStudentChange}
              label="Select Student"
              disabled={isLoading || isError}
            >
              {students?.data?.map((student)  => (
                <MenuItem key={student.studentId} value={student.studentId}>
                  {student.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="flex gap-2 mt-3">
            <Button
              onClick={handleAssign}
              variant="contained"
              size="small"
              sx={{ backgroundColor: "#302394", textTransform: "none" }}
              disabled={!selectedStudentId}
            >
              Assign
            </Button>
            <Button
              onClick={handleCancel}
              variant="outlined"
              size="small"
              color="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="w-full bg-yellow-50 py-0.5 flex flex-col justify-between items-center rounded shadow-sm cursor-pointer"
          key={slot.timeSlotId}
          onClick={handleClick}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm text-gray-600 py-1 px-3 rounded-full">
              {slot.isBooked ? "Booked" : "Free"}
            </p>
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
