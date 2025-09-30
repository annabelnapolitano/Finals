import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import fetchAPI from "../fetchAPI";

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
    if (times.length > 0) {
      setTime(times[0]);
    } else {
      setTime("");
    }
  }, [date]); // ONLY date, not time

  function submitAPI(formData) {
    return true;
  }

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
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