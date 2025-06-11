import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Renders the reservation date label", () => {
  render(<BookingForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const labelElement = screen.getByText(/reservation date/i);
  expect(labelElement).toBeInTheDocument();
});

test("Renders the make your reservation button", () => {
  render(<BookingForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const buttonElement = screen.getByText(/make your reservation/i);
  expect(buttonElement).toBeInTheDocument();
});

test("BookingForm can be submitted", () => {
  const handleSubmit = jest.fn();
  render(
    <BookingForm
      availableTimes={[]}
      setAvailableTimes={() => {}}
      onSubmit={handleSubmit}
    />
  );

  // Fill out form fields
  fireEvent.change(screen.getByLabelText(/reservation date/i), {
    target: { value: "2023-10-10" },
  });
  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "17:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  // Submit the form
  fireEvent.submit(
    screen.getByRole("button", { name: /make your reservation/i })
  );

  // Check if handleSubmit was called
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
