import { initializeTimes } from './initializeTimes';
import fetchAPI from '../fetchAPI';

// Mock fetchAPI using Jest
jest.mock('./fetchAPI');

describe('initializeTimes', () => {
  it('returns available booking times from fetchAPI', () => {
    // Arrange: mock fetchAPI to return a non-empty array
    const mockTimes = ['17:00', '17:30', '18:00'];
    fetchAPI.mockReturnValue(mockTimes);

    // Act
    const result = initializeTimes('2025-09-29');

    // Assert
    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith('2025-09-29');
  });
});