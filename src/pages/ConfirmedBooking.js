import { useEffect, useState } from "react";

export default function ConfirmedBooking() {
  const [availableHeight, setAvailableHeight] = useState("100vh");

  useEffect(() => {
    const navHeight = document.getElementById("navbar")?.offsetHeight || 0;
    const headerHeight = document.getElementById("header")?.offsetHeight || 0;
    const totalOffset = navHeight + headerHeight;

    setAvailableHeight(`calc(100vh - ${totalOffset}px)`);
  }, []);

  return (
    <main
      className="reservation fade-in"
      style={{ minHeight: availableHeight }}
    >
      <span style={{ fontFamily: "var(--ff-markazi)", fontSize: "4rem" }}>
        Congratulations!!! 🎉
      </span>
      <span style={{ fontFamily: "var(--ff-markazi)", fontSize: "2rem" }}>
        Your reservation is confirmed.
      </span>
      <span
        style={{
          fontFamily: "var(--ff-karla)",
          fontSize: "1rem",
          width: "600px",
        }}
      >
        We look forward to welcoming you soon and making your experience
        memorable. Our team is excited to host you and ensure that every moment
        of your visit is special. Thank you for choosing us—see you soon!
      </span>
    </main>
  );
}
