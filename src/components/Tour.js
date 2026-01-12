import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  const shortText = info.substring(0, 200);

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>{price}</h4>

      {/* Cypress checks ONLY this text */}
      <p id={`tour-item-para-${id}`}>
        {showMore ? info : shortText}
      </p>

      <button
        id={showMore ? `see-less-${id}` : `see-more-${id}`}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "See less" : "See more"}
      </button>

      <button
        id={`delete-btn-${id}`}
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Tour;








