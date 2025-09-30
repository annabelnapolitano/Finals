import { validateBookingForm } from './validateBookingForm';

const today = new Date().toISOString().split("T")[0];
const availableTimes = ['17:00', '18:00', '19:00'];

describe('validateBookingForm', () => {
  it('returns no errors for valid inputs', () => {
    const errors = validateBookingForm({
      date: today,
      minDate: today,
      time: '18:00',
      availableTimes,
      guests: 5,
      occasion: 'Birthday'
    });
    expect(errors).toEqual({});
  });

  it('returns error for invalid date', () => {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    const errors = validateBookingForm({
      date: yesterday,
      minDate: today,
      time: '18:00',
      availableTimes,
      guests: 5,
      occasion: 'Birthday'
    });
    expect(errors.date).toBe("Date must be today or later.");
  });

  it('returns error for invalid time', () => {
    const errors = validateBookingForm({
      date: today,
      minDate: today,
      time: '20:00',
      availableTimes,
      guests: 5,
      occasion: 'Birthday'
    });
    expect(errors.time).toBe("Please select a valid time.");
  });

  it('returns error for invalid guests', () => {
    const errorsLow = validateBookingForm({
      date: today,
      minDate: today,
      time: '18:00',
      availableTimes,
      guests: 0,
      occasion: 'Birthday'
    });
    expect(errorsLow.guests).toBe("Guests must be between 1 and 20.");
    const errorsHigh = validateBookingForm({
      date: today,
      minDate: today,
      time: '18:00',
      availableTimes,
      guests: 25,
      occasion: 'Birthday'
    });
    expect(errorsHigh.guests).toBe("Guests must be between 1 and 20.");
  });

  it('returns error for invalid occasion', () => {
    const errors = validateBookingForm({
      date: today,
      minDate: today,
      time: '18:00',
      availableTimes,
      guests: 5,
      occasion: ''
    });
    expect(errors.occasion).toBe("Please select an occasion.");
    const errorsType = validateBookingForm({
      date: today,
      minDate: today,
      time: '18:00',
      availableTimes,
      guests: 5,
      occasion: 'Graduation'
    });
    expect(errorsType.occasion).toBe("Please select an occasion.");
  });
});