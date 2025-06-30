"use client";
import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { useGenerateScheduleTimeMutation } from "@/state/api";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type DayConfig = {
  startTime: string;
  endTime: string;
};

const TimeSlotConfigurator = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [defaultStartTime, setDefaultStartTime] = useState("08:00");
  const [defaultEndTime, setDefaultEndTime] = useState("17:00");
  const [customTimes, setCustomTimes] = useState<Record<string, DayConfig>>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const router = useRouter();
  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };
  const [generateSchedules] = useGenerateScheduleTimeMutation();
  const handleTimeChange = (
    day: string,
    field: "startTime" | "endTime",
    value: string
  ) => {
    setCustomTimes((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const handleGenerate = async () => {
  if (!selectedDays.length) {
    setSnackbar({
      open: true,
      message: "Please select at least one day.",
      severity: "error",
    });
    return;
  }
  try {
    const response = await generateSchedules({
      days: selectedDays,
      defaultStartTime,
      defaultEndTime,
      customTimes,
    }).unwrap();

    setSnackbar({
      open: true,
      message: response.message || "Time slots generated successfully.",
      severity: "success",
    });

    // ✅ Reset form to initial state
    setSelectedDays([]);
    setDefaultStartTime("08:00");
    setDefaultEndTime("17:00");
    setCustomTimes({});
  } catch (error: any) {
    setSnackbar({
      open: true,
      message:
        error?.data?.message || "An error occurred while generating time slots.",
      severity: "error",
    });
  }
};


  return (
    <main className="max-w-3xl p-6 space-y-8">
      <h2 className="text-2xl font-bold">Configure Time Slots</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Select Days:</label>
          <div className="flex flex-wrap gap-2">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={`px-4 py-2 rounded-xl border transition ${
                  selectedDays.includes(day)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Default Start Time</label>
            <input
              type="time"
              value={defaultStartTime}
              onChange={(e) => setDefaultStartTime(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Default End Time</label>
            <input
              type="time"
              value={defaultEndTime}
              onChange={(e) => setDefaultEndTime(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {selectedDays.map((day) => (
          <div key={day} className="border rounded-xl p-4 mt-4 bg-gray-50">
            <h4 className="font-semibold mb-2">{day} (custom time optional)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Time
                </label>
                <input
                  type="time"
                  value={customTimes[day]?.startTime || ""}
                  onChange={(e) =>
                    handleTimeChange(day, "startTime", e.target.value)
                  }
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  End Time
                </label>
                <input
                  type="time"
                  value={customTimes[day]?.endTime || ""}
                  onChange={(e) =>
                    handleTimeChange(day, "endTime", e.target.value)
                  }
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={handleGenerate}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Generate Time Slots
        </button>

        <button
          onClick={() => router.push("/timeSlots/generatedTimes")}
          className="w-full border border-gray-400 text-gray-800 font-semibold py-2 rounded"
        >
          View Time Slots
        </button>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          severity={snackbar.severity as any}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </main>
  );
};

export default TimeSlotConfigurator;
