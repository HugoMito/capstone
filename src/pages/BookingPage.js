import { Fragment, useReducer } from "react";
import BookingForm from "../components/BookingForm";

const initialState = ["17:00", "20:00"];
export const initializeTimes = () => {
  return initialState;
};

export const updateTimes = (payload) => {
  if (Array.isArray(payload)) return payload;
};

export default function BookingPage() {
  const timesReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return updateTimes(action.payload);
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    initialState,
    initializeTimes
  );

  const hnd_Submit = () => {
    // Handle form submission logic, i think I dont' need this
    console.log("Form submitted");
  };

  return (
    <Fragment>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={(date) =>
          dispatch({ type: "UPDATE_TIMES", payload: date })
        }
        onSubmit={hnd_Submit}
      />
    </Fragment>
  );
}
