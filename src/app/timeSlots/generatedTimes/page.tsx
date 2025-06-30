"use client";

import React from "react";
import { useRouter } from "next/navigation";

const mockSlots = [
  "Monday: 08:00 - 09:00",
  "Monday: 09:00 - 10:00",
  "Tuesday: 08:00 - 09:00",
  "Wednesday: 12:00 - 13:00",
];

const GenerateTimePage = () => {
  const router = useRouter();
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">All Generated Time Slots</h2>

      {mockSlots.length === 0 ? (
        <p className="text-gray-500">No time slots available.</p>
      ) : (
        <ul className="bg-white rounded-lg border p-4 shadow space-y-2 max-h-80 overflow-y-auto">
          {mockSlots.map((slot, i) => (
            <li key={i} className="text-gray-800 text-sm">
              {slot}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => router.back()}
        className="mt-6 bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded-lg"
      >
        ← Back to Configuration
      </button>
    </main>
  );
};

export default GenerateTimePage;
