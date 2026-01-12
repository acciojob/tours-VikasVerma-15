import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  const shortText = info.slice(0, 250);

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>{price}</h4>
<p id={`tour-item-para-${id}`}>
  {showMore ? info : shortText}
  <button
    id={showMore ? `see-less-${id}` : `see-more-${id}`}
    onClick={() => setShowMore(!showMore)}
  >
    {showMore ? "See less" : "See more"}
  </button>
</p>

      <button id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Tour;






