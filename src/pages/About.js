import { useEffect, useState } from "react";

export default function About() {
  const [availableHeight, setAvailableHeight] = useState("100vh");

  useEffect(() => {
    const navHeight = document.getElementById("navbar")?.offsetHeight || 0;
    const headerHeight = document.getElementById("header")?.offsetHeight || 0;
    const totalOffset = navHeight + headerHeight;

    setAvailableHeight(`calc(100vh - ${totalOffset}px)`);
  }, []);

  return (
    <main className="outOfScope fade-in" style={{ minHeight: availableHeight }}>
      <h1>About component</h1>
      <h3>Out of Scope</h3>
    </main>
  );
}
