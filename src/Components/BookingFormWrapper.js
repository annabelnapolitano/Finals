import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import fetchAPI from "../fetchAPI";

// fetchAPI returns available times for a given date
// see fetchAPI.js below

function BookingFormWrapper() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate();

  useEffect(() => {
  const times = fetchAPI(date);
  setAvailableTimes(times);

  // If the current time isn't in the new times, set it to the first available
  if (times.length > 0) {
    setTime(prevTime => times.includes(prevTime) ? prevTime : times[0]);
  } else {
    setTime("");
  }
}, [date]);

  function submitAPI(formData) {
    // Simulate API call, always returns true for demo
    return true;
  }

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
    // You may handle error case here
  };

  return (
    <BookingForm
      date={date}
      onDateChange={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      availableTimes={availableTimes}
      submitForm={submitForm}
    />
  );
}

export default BookingFormWrapper;