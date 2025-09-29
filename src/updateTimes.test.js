import { updateTimes } from './updateTimes';
import fetchAPI from './fetchAPI';

// Mock fetchAPI using Jest
jest.mock('./fetchAPI');

describe('updateTimes', () => {
  it('returns available booking times for the selected date from fetchAPI', () => {
    // Arrange
    const mockTimes = ['17:00', '17:30', '18:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: 'setTimes', date: '2025-09-29' };
    const state = [];

    // Act
    const result = updateTimes(state, action);

    // Assert
    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith('2025-09-29');
  });

  it('returns state unchanged for unknown action type', () => {
    const action = { type: 'unknown', date: '2025-09-29' };
    const state = ['17:00'];
    const result = updateTimes(state, action);
    expect(result).toEqual(state);
  });
});