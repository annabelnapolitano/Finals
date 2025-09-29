import React from 'react';
import BookingFormWrapper from './BookingFormWrapper';

function BookingPage() {
  return (
    <section className="booking">
      <h2>Reserve a Table</h2>
      <BookingFormWrapper />
      {/* You can add more content before or after the form */}
    </section>
  );
}

export default BookingPage;