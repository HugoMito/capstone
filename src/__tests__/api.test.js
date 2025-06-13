import { submitAPI } from "../components/api";

describe("submitAPI", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();

    // Mock localStorage methods
    Storage.prototype.setItem = jest.fn((key, value) => {
      Storage.prototype[key] = value;
    });
    Storage.prototype.getItem = jest.fn((key) => {
      return Storage.prototype[key] || null;
    });
  });

  test("should add new booking to existing bookings in localStorage", async () => {
    const existingBooking = {
      date: "2023-10-09",
      time: "18:00",
      guests: "3",
      occasion: "Anniversary",
    };
    const newBooking = {
      date: "2023-10-10",
      time: "17:00",
      guests: "2",
      occasion: "Birthday",
    };

    localStorage.setItem("bookings", JSON.stringify([existingBooking]));

    const result = await submitAPI(newBooking);

    const expectedBookings = JSON.stringify([existingBooking, newBooking]);

    expect(result).toBe(true);
    expect(localStorage.getItem("bookings")).toBe(expectedBookings);
  });
});
