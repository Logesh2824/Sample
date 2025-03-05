import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://your-backend.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>React + Render Deployment</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
