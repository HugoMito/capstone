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

  const hnd_Change = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });

    if (name === "date") {
      setAvailableTimes(value); // Dispatch update with the new date
    }
  };

  const hnd_Blur = (event) => {
    event.preventDefault();
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
          {/* <form className="bookingFields" onSubmit={hnd_Submit}> */}
          <form className="bookingFields">
            <label htmlFor="res-date">Reservation date</label>
            <input
              id="res-date"
              name="date"
              onBlur={hnd_Blur}
              onChange={hnd_Change}
              type="date"
              value={formState.date}
            />

            <label htmlFor="res-time">Time</label>
            <select
              id="res-time"
              name="time"
              onBlur={hnd_Blur}
              onChange={hnd_Change}
              value={formState.time}
            >
              <option>Select a time</option>
              {(availableTimes || []).map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
              id="guests"
              max="10"
              min="1"
              name="guests"
              onBlur={hnd_Blur}
              onChange={hnd_Change}
              placeholder="1"
              type="number"
              value={formState.guests}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              onBlur={hnd_Blur}
              onChange={hnd_Change}
              value={formState.occasion}
            >
              <option>Select an Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>

            {/* <input type="submit" value="Make Your reservation" /> */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onSubmit(formState);
              }}
            >
              Make your reservation
            </button>
          </form>
        </main>
      </center>
    </Fragment>
  );
}
