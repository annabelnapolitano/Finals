// Returns available times for a given date, mock implementation
export default function fetchAPI(date) {
  // Example: every half hour from 17:00 to 22:00
  const times = [];
  for (let hour = 17; hour <= 22; hour++) {
    for (let min = 0; min < 60; min += 30) {
      if (hour === 22 && min > 0) break; // Only include 22:00, not 22:30
      times.push(
        `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
      );
    }
  }
  return times;
}