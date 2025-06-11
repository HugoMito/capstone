import { initializeTimes, updateTimes } from "../pages/BookingPage";

test("initializeTimes returns the correct initial times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedTimes);
});

test("updateTimes returns the correct times for a given date", () => {
  const date = "2023-10-10"; // Example date
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Adjust as needed
  expect(updateTimes(date)).toEqual(expectedTimes);
});
