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

const submitAPI = async (formData) => {
  console.log("3Hs :>> api.js -> formData:", formData);
  return { status: 200, message: "OK" };
};

export { fetchAPI, submitAPI };
