import React, { useState, useEffect } from "react";
import data from "../data";
import Tours from "./Tours";
import Loading from "./Loading";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setTours(data);
      setLoading(false);
    }, 1000);
  }, []);

  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return (
      <div id="main">
        <Loading />
      </div>
    );
  }

  return (
    <div id="main">
      <h1 className="title">Our Tours</h1>
      {tours.length === 0 ? (
        <>
          <h2>No more tours</h2>
          <button className="btn" onClick={() => setTours(data)}>Refresh</button>
        </>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
}

export default App;


