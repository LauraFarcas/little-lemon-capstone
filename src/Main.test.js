import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from './utils/apis';
jest.mock('./utils/apis', () => ({
    fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
}));

describe('Test initializeTimes functionality', () => {
    beforeEach(() => {
        fetchAPI.mockClear();
    });

    test('should return the times fetched from the API', () => {
        const apiTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        fetchAPI.mockReturnValue(apiTimes);

        const result = initializeTimes();
        expect(result).toEqual(apiTimes);
        expect(fetchAPI).toHaveBeenCalled();
    });
});

describe('Test updateTimes functionality', () => {
    const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    test('should return the updated times when action type is UPDATE_TIMES', () => {
        const action = { type: 'UPDATE_TIMES', date: '2023-10-10' };
        const updatedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        fetchAPI.mockReturnValue(updatedTimes);

        const result = updateTimes(defaultTimes, action);
        expect(result).toEqual(updatedTimes);
        expect(fetchAPI).toHaveBeenCalledWith(new Date(action.date));
    });

    test('should return the initial times when action type is SET_INITIAL_TIMES', () => {
        const action = { type: 'SET_INITIAL_TIMES', times: defaultTimes };

        const result = updateTimes([], action);
        expect(result).toEqual(defaultTimes);
    });

    test('should return the current state for unknown action types', () => {
        const action = { type: 'UNKNOWN_ACTION', date: '2023-10-10' };

        const result = updateTimes(defaultTimes, action);
        expect(result).toEqual(defaultTimes);
    });
});