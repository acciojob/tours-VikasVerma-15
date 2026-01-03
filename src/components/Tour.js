import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const words = info.split(" ");
  const isLongText = words.length > 200;
  const shortText = words.slice(0, 200).join(" ");

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>{price}</h4>

      <p id={`tour-item-para-${id}`}>
        {readMore || !isLongText ? info : shortText}

        {isLongText && (
          <button
            id={readMore ? `see-less-${id}` : `see-more-${id}`}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "See less" : "See more"}
          </button>
        )}
      </p>

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
