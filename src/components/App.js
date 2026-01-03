import React, { useState } from "react";
import data from "./data";
import Tours from "./Tours";

function App() {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  if (tours.length === 0) {
    return (
      <div id="main">
        <h2>No tours left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div id="main">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;

