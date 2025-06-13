import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

describe("Render and verify labels", () => {
  test("Renders the reservation date label", () => {
    const handleSubmit = jest.fn();
    render(
      <BookingForm
        availableTimes={[]}
        setAvailableTimes={() => {}}
        onSubmit={handleSubmit}
      />
    );

    const labelElement = screen.getByText(/reservation date/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("Renders the make your reservation button", () => {
    const handleSubmit = jest.fn();
    render(
      <BookingForm
        availableTimes={[]}
        setAvailableTimes={() => {}}
        onSubmit={handleSubmit}
      />
    );
    const buttonElement = screen.getByText(/make your reservation/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

describe("HTML5 fieldS validation", () => {
  const mockAvailableTimes = ["17:00", "18:00"];
  const mockSetAvailableTimes = jest.fn();
  const mockOnSubmit = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Date field attibutes validation", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    let dateInput = screen.getByLabelText(/reservation date/i);

    // Check attribute
    expect(dateInput).toHaveAttribute("aria-invalid"); // Just presence
    expect(dateInput.getAttribute("id")).toBe("res-date");
    expect(dateInput.getAttribute("type")).toBe("date");
    expect(dateInput).toBeRequired(); // Browser validation
    expect(dateInput).toHaveAttribute("required"); // Just presence
    expect(dateInput.getAttribute("min")).toBe(
      new Date().toISOString().split("T")[0]
    );
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    expect(dateInput.getAttribute("max")).toBe(
      maxDate.toISOString().split("T")[0]
    );

    // Fill out fields
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: "2000-06-15" },
    });

    // Submit the form by clicking the button
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    // Get the date field attributes
    dateInput = screen.getByLabelText(/reservation date/i);

    // Validate aria-invalid value
    expect(dateInput).toHaveAttribute("aria-invalid", "true");
  });

  test("Time field attibutes validation", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    let timeSelect = screen.getByLabelText(/time/i);

    // Check attribute
    expect(timeSelect).toHaveAttribute("aria-invalid"); // Just presence
    expect(timeSelect.getAttribute("id")).toBe("res-time");
    expect(timeSelect.tagName.toLowerCase()).toBe("select");
    expect(timeSelect).toBeRequired(); // Browser validation
    expect(timeSelect).toHaveAttribute("required"); // Just presence

    // Fill out fields
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: "2025-06-15" }, // Ensure a valid future date
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "12:00" },
    });

    // Submit the form by clicking the button
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    // Get the date field attributes
    timeSelect = screen.getByLabelText(/time/i);

    // Validate aria-invalid value
    expect(timeSelect).toHaveAttribute("aria-invalid", "true");
  });

  test("Guests field attibutes validation", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    let guestsInput = screen.getByLabelText(/number of guests/i);

    // Check attribute
    expect(guestsInput).toHaveAttribute("aria-invalid"); // Just presence
    expect(guestsInput.getAttribute("id")).toBe("res-guests");
    expect(guestsInput.getAttribute("type")).toBe("number");
    expect(guestsInput).toBeRequired(); // Browser validation
    expect(guestsInput).toHaveAttribute("required"); // Just presence
    expect(guestsInput.getAttribute("max")).toBe("10");
    expect(guestsInput.getAttribute("min")).toBe("1");

    // Fill out fields
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: "2025-06-15" }, // Ensure a valid future date
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "40" },
    });

    // Submit the form by clicking the button
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    // Get the date field attributes
    guestsInput = screen.getByLabelText(/number of guests/i);

    // Validate aria-invalid value
    expect(guestsInput).toHaveAttribute("aria-invalid", "true");
  });

  test("Occasion field attibutes validation", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    let occasionSelect = screen.getByLabelText(/occasion/i);

    // Check attribute
    expect(occasionSelect).toHaveAttribute("aria-invalid"); // Just presence
    expect(occasionSelect.getAttribute("id")).toBe("res-occasion");
    expect(occasionSelect.tagName.toLowerCase()).toBe("select");
    expect(occasionSelect).toBeRequired(); // Browser validation
    expect(occasionSelect).toHaveAttribute("required"); // Just presence

    // Fill out fields
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: "2025-06-15" }, // Ensure a valid future date
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "12:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });

    // Submit the form by clicking the button
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    // Get the date field attributes
    occasionSelect = screen.getByLabelText(/occasion/i);

    // Validate aria-invalid value
    expect(occasionSelect).toHaveAttribute("aria-invalid", "true");
  });
});

describe("React fields validation with invalid values", () => {
  const mockAvailableTimes = ["17:00", "18:00"];
  const mockSetAvailableTimes = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Date field: Displays error when date is empty", () => {
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: "" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );
    expect(screen.getByText(/valid date is required/i)).toBeInTheDocument();
  });

  test("Date field: Displays error for past date", () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: pastDate.toISOString().split("T")[0] },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );
    expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
  });

  test("Time field: Displays error when time is not selected", () => {
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "Select a time" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
  });

  test("Guests field: Displays error when guests is below 1", () => {
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "0" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );
    expect(
      screen.getByText(/There must be at least 1 guest/i)
    ).toBeInTheDocument();
  });

  test("Guests field: Displays error when guests exceed 10", () => {
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "11" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );
    expect(screen.getByText(/cannot exceed 10 guests/i)).toBeInTheDocument();
  });

  test("Occasion field: Displays error when occasion is not selected", () => {
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Select an Occasion" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });
});

describe("React fields validation with valid values", () => {
  const mockAvailableTimes = ["17:00", "18:00"];
  const mockSetAvailableTimes = jest.fn();
  const mockOnSubmit = jest.fn();

  test("BookingForm can be submitted with valid values", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        onSubmit={mockOnSubmit}
      />
    );

    // Fill out form fields
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: "2025-06-15" }, // Ensure a valid future date
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

    // Click the button
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    // Check if onSubmit was called
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
