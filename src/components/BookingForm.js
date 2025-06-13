import { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "./api";

export default function BookingForm({
  availableTimes,
  setAvailableTimes,
  onSubmit,
}) {
  const [formState, setFormState] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const hnd_Change = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    setErrors({ ...errors, [name]: "" });

    if (name === "date") {
      setAvailableTimes(value); // Dispatch update with the new date
    }
  };

  const hnd_Submit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validate form fields
    const { date, time, guests, occasion } = formState;

    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setMonth(today.getMonth() + 1);

    const selectedDate = new Date(date);
    if (!date) {
      newErrors.date = "Valid Date is required.";
    } else if (selectedDate < today) {
      newErrors.date = "Date cannot be in the past.";
    } else if (selectedDate > maxDate) {
      newErrors.date = "Date cannot be a month ahead.";
    }

    if (!time || time === "Select a time") {
      newErrors.time = "Time is required.";
    }

    const numGuests = parseInt(guests, 10);
    if (!guests) {
      newErrors.guests = "Number of guests is required.";
    } else if (numGuests < 1) {
      newErrors.guests = "There must be at least 1 guest.";
    } else if (numGuests > 10) {
      newErrors.guests = "Cannot exceed 10 guests.";
    }

    if (!occasion || occasion === "Select an Occasion") {
      newErrors.occasion = "Occasion is required.";
    }

    // Set any error message, and focus on first error field
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      // Focus on the first invalid field
      const firstErrorKey = Object.keys(newErrors)[0];
      document.getElementById(`res-${firstErrorKey}`).focus();

      return;
    }

    // console.log("Calling onSubmit with: ", formState);
    onSubmit(formState);
  };

  // Get available times, whenever the date changes
  useEffect(() => {
    const fetchTimes = async () => {
      if (formState.date) {
        try {
          const times = await fetchAPI(formState.date);
          setAvailableTimes(times);
        } catch (error) {
          console.error("Error fetching times:", error);
        }
      }
    };

    fetchTimes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState.date]);

  return (
    <Fragment>
      <center>
        <main className="bookingGrid">
          <form className="bookingFields">
            <label htmlFor="res-date">Reservation date</label>
            <input
              aria-describedby={errors.date ? "error-date" : undefined}
              aria-invalid={errors.date ? "true" : "false"}
              aria-required="true"
              id="res-date"
              max={
                new Date(new Date().setMonth(new Date().getMonth() + 1))
                  .toISOString()
                  .split("T")[0]
              }
              min={new Date().toISOString().split("T")[0]}
              name="date"
              onChange={hnd_Change}
              required
              type="date"
              value={formState.date}
            />
            <span
              aria-live="assertive"
              id="error-date"
              role="alert"
              style={{
                color: "red",
                fontFamily: "var(--ff-karla)",
                fontSize: "0.9rem",
                fontWeight: "var(--fw-karla-thin)",
                marginBottom: "0.5rem",
              }}
            >
              {errors.date || "\u00A0"}
            </span>

            <label htmlFor="res-time">Time</label>
            <select
              aria-describedby={errors.time ? "error-time" : undefined}
              aria-invalid={errors.time ? "true" : "false"}
              aria-required="true"
              id="res-time"
              name="time"
              onChange={hnd_Change}
              required
              value={formState.time}
            >
              <option>Select a time</option>
              {(availableTimes || []).map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <span
              aria-live="assertive"
              id="error-time"
              role="alert"
              style={{
                color: "red",
                fontFamily: "var(--ff-karla)",
                fontSize: "0.9rem",
                fontWeight: "var(--fw-karla-thin)",
                marginBottom: "0.5rem",
              }}
            >
              {errors.time || "\u00A0"}
            </span>

            <label htmlFor="res-guests">Number of guests</label>
            <input
              aria-describedby={errors.guests ? "error-guests" : undefined}
              aria-invalid={errors.guests ? "true" : "false"}
              aria-required="true"
              id="res-guests"
              max="10"
              min="1"
              name="guests"
              onChange={hnd_Change}
              placeholder="1"
              required
              type="number"
              value={formState.guests}
            />
            <span
              aria-live="assertive"
              id="error-guests"
              role="alert"
              style={{
                color: "red",
                fontFamily: "var(--ff-karla)",
                fontSize: "0.9rem",
                fontWeight: "var(--fw-karla-thin)",
                marginBottom: "0.5rem",
              }}
            >
              {errors.guests || "\u00A0"}
            </span>

            <label htmlFor="res-occasion">Occasion</label>
            <select
              aria-describedby={errors.occasion ? "error-occasion" : undefined}
              aria-invalid={errors.occasion ? "true" : "false"}
              aria-required="true"
              id="res-occasion"
              name="occasion"
              onChange={hnd_Change}
              required
              value={formState.occasion}
            >
              <option>Select an Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <span
              aria-live="assertive"
              id="error-occasion"
              role="alert"
              style={{
                color: "red",
                fontFamily: "var(--ff-karla)",
                fontSize: "0.9rem",
                fontWeight: "var(--fw-karla-thin)",
                marginBottom: "0.5rem",
              }}
            >
              {errors.occasion || "\u00A0"}
            </span>

            <button
              className="bookingButton"
              aria-label="Make your reservation"
              aria-disabled={"false"}
              type="button"
              onClick={hnd_Submit}
            >
              Make your reservation
            </button>
          </form>
        </main>
      </center>
    </Fragment>
  );
}
