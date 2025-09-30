

export function validateBookingForm({ date, minDate, time, availableTimes, guests, occasion }) {
  const errors = {};
  if (!date || date < minDate) errors.date = "Date must be today or later.";
  if (!time || !availableTimes.includes(time)) errors.time = "Please select a valid time.";
  if (!(guests >= 1 && guests <= 20)) errors.guests = "Guests must be between 1 and 20.";
  if (!occasion || (occasion !== "Birthday" && occasion !== "Anniversary")) errors.occasion = "Please select an occasion.";
  return errors;
}