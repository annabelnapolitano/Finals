import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';

// Function to initialize available times
function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

// Reducer function for managing available times
function updateTimes(state, action) {
  // For now, always return the full set; replace logic as needed for real dynamic update
  if (action.type === 'date_change') {
    // action.date contains the new selected date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return state;
}

function Main() {
  // availableTimes state using useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  // Local states for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Handler to update available times (date drive; currently static)
  const handleDateChange = (newDate) => {
    setDate(newDate);
    dispatch({ type: 'date_change', date: newDate });
    // Optionally, setTime to a default when date changes
    setTime('17:00');
  };

  return (
    <main>
      <h2>Reserve a Table</h2>
      <BookingForm
        date={date}
        onDateChange={handleDateChange}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
      />
    </main>
  );
}

export default Main;
