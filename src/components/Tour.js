import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const maxLength = 200;
  const isLongText = info.length > maxLength;
  const shortText = info.substring(0, maxLength);

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>{price}</h4>
      <p id={`tour-item-para-${id}`}>
        {readMore || !isLongText ? info : shortText}

        {isLongText && (
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? " Show Less" : " Read More"}
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


