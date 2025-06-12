// Api call
// <script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  return new Promise((resolve, reject) => {
    // Convert string to Date object
    const dateObject = new Date(date);

    if (isNaN(dateObject)) {
      reject(new Error("Invalid date"));
    }

    let result = [];
    let random = seededRandom(dateObject.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }

    resolve(result);
  });
};

const submitAPI = async (newBooking) => {
  const { date, time, guests, occasion } = newBooking;
  if (!date || !time || !guests || !occasion) return false;

  // Retrieve previous booking information, if applicable
  const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  existingBookings.push(newBooking);

  // Store data in local storage
  localStorage.setItem("bookings", JSON.stringify(existingBookings));

  return true;
};

export { fetchAPI, submitAPI };
