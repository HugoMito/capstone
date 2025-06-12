import { initializeTimes, updateTimes } from "../pages/BookingPage";
import { fetchAPI } from "../components/api";

// Mock the fetchAPI function
jest.mock("../components/api", () => ({
  fetchAPI: jest.fn(),
}));

// test("initializeTimes returns the correct initial times", () => {
//   const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   expect(initializeTimes()).toEqual(expectedTimes);
// });

// test("updateTimes returns the correct times for a given date", () => {
//   const date = "2023-10-10"; // Example date
//   const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Adjust as needed
//   expect(updateTimes(date)).toEqual(expectedTimes);
// });

describe("BookingPage functions", () => {
  beforeEach(() => {
    // Reset the mock before each test
    fetchAPI.mockReset();
  });

  test("initializeTimes should return times from fetchAPI", async () => {
    const mockTimes = ["18:00", "19:30"];
    fetchAPI.mockResolvedValue(mockTimes);

    const date = new Date(); // You can also use a fixed date for consistency
    const times = await initializeTimes(date);

    expect(fetchAPI).toHaveBeenCalledWith(date);
    expect(times).toEqual(mockTimes);
  });

  test("updateTimes should return the payload if it is an array", () => {
    const payload = ["17:00", "20:30"];
    const result = updateTimes(payload);

    expect(result).toEqual(payload);
  });

  test("updateTimes should return undefined for non-array payload", () => {
    const payload = "invalid payload";
    const result = updateTimes(payload);

    expect(result).toBeUndefined();
  });
});
