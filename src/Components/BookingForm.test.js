import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Dummy props for BookingForm
const defaultProps = {
  date: '2025-10-01',
  onDateChange: jest.fn(),
  time: '17:00',
  setTime: jest.fn(),
  guests: 2,
  setGuests: jest.fn(),
  occasion: 'Birthday',
  setOccasion: jest.fn(),
  availableTimes: ['17:00', '17:30', '18:00'],
  submitForm: jest.fn(),
};

describe('BookingForm HTML5 validation attributes', () => {
  beforeEach(() => {
    render(<BookingForm {...defaultProps} />);
  });

  it('date input has required and min attributes', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min');
    // Optionally: check min value is today or later
    const minDate = new Date().toISOString().split("T")[0];
    expect(dateInput.getAttribute('min')).toBe(minDate);
  });

  it('time select has required attribute', () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  it('guests input has required, min and max attributes', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '20');
  });

  it('occasion select has required attribute', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });
});