function BookingPage() {
  return (
    <section className="booking">
      <h2>Reserve a Table</h2>
      <form>
        {/* form fields */}
        <input type="date" name="date" />
        <input type="time" name="time" />
        <input type="number" name="guests" min="1" max="20" />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}
export default BookingPage;
