import React from 'react';

function BookingForm({
  date,
  onDateChange,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  submitForm // receive this as a prop!
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to parent for submission
    submitForm({ date, time, guests, occasion });
  };

  const handleGuestsChange = (e) => {
    let val = Number(e.target.value);
    if (val > 20) val = 20;
    if (val < 1) val = 1;
    setGuests(val);
  };

  return (
    <form
      aria-label="Reservation form"
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        required
        aria-required="true"
        onChange={e => onDateChange(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        aria-required="true"
        onChange={e => setTime(e.target.value)}
      >
        {availableTimes.map(t => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="20"
        id="guests"
        value={guests}
        required
        aria-required="true"
        aria-describedby="guests-help"
        onChange={handleGuestsChange}
      />
      <span id="guests-help">Please enter a number between 1 and 20</span>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        aria-required="true"
        onChange={e => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;