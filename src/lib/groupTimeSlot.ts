export type TimeSlot = {
  day: string;
  startTime: string;
  endTime: string;
  timeSlotId: string;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
};

// Helper to convert "HH:MM" string to minutes for easy comparison
const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Weekday sort order
const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export const groupTimeSlots = (slots: TimeSlot[]) => {
  const grouped: { [day: string]: TimeSlot[] } = {};

  slots.forEach((slot) => {
    const day = slot.day.toLowerCase();
    if (!grouped[day]) grouped[day] = [];
    grouped[day].push(slot);
  });

  // Sort each day's slots by startTime
  for (const day in grouped) {
    grouped[day].sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
  }

  // Return grouped days as an array in correct weekday order
  return Object.entries(grouped).sort(
    ([dayA], [dayB]) =>
      dayOrder.indexOf(dayA.toLowerCase()) - dayOrder.indexOf(dayB.toLowerCase())
  );
};
