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
      availableTimes={["17:00", "18:00"]}
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

  // // Submit the form
  // fireEvent.submit(
  //   screen.getByRole("button", { name: /make your reservation/i })
  // );
  // Click the button
  fireEvent.click(
    screen.getByRole("button", { name: /make your reservation/i })
  );

  // Check if handleSubmit was called
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    date: "2023-10-10",
    time: "17:00",
    guests: "2",
    occasion: "Birthday",
  });
});

describe("BookingForm Component", () => {
  const mockAvailableTimes = ["17:00", "18:00"];
  const mockSetAvailableTimes = jest.fn();
  const mockOnSubmit = jest.fn();

  test("calls setAvailableTimes when a new date is selected", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    const dateInput = screen.getByLabelText(/reservation date/i);
    fireEvent.change(dateInput, { target: { value: "2023-10-10" } });

    expect(mockSetAvailableTimes).toHaveBeenCalled();
  });

  test("calls onSubmit when form is submitted", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

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

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      date: "2023-10-10",
      time: "17:00",
      guests: "2",
      occasion: "Birthday",
    });
  });
});
