import { Fragment, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { submitAPI, fetchAPI } from "../components/api";

export const initializeTimes = async (date) => {
  const times = await fetchAPI(date);
  return times;
};

export const updateTimes = (payload) => {
  if (Array.isArray(payload)) return payload;
};

export default function BookingPage() {
  const navigate = useNavigate();
  const [navigateTo, setNavigateTo] = useState(false);

  const timesReducer = (state, action) => {
    switch (action.type) {
      case "SET_INITIAL_TIMES":
        return action.payload;
      case "UPDATE_TIMES":
        return updateTimes(action.payload);
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const today = new Date(); // Get the current date
      const initialTimes = await initializeTimes(today); // Pass the current date
      dispatch({ type: "SET_INITIAL_TIMES", payload: initialTimes });
    };
    fetchInitialTimes();
  }, []);

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);
    setNavigateTo(result);
  };

  // Send reservation confirmation
  useEffect(() => {
    if (!navigateTo) return;

    navigate("/confirmedbooking");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigateTo]);

  return (
    <Fragment>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={(date) =>
          dispatch({ type: "UPDATE_TIMES", payload: date })
        }
        onSubmit={submitForm}
      />
    </Fragment>
  );
}
