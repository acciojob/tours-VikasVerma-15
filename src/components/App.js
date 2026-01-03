import React, { useState } from "react";
import data from "./data";
import Tours from "./Tours";

function App() {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <div id="main">
      {tours.length === 0 ? (
        <>
          <h2>No tours left</h2>
          <button onClick={() => setTours(data)}>Refresh</button>
        </>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
}

export default App;


