import { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const words = info.split(" ");
  const shortText = words.slice(0, 200).join(" ");

  return (
    <article>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>{price}</h4>

      {/* Cypress looks for THIS EXACT ID */}
      <p id={`tour-item-para-${id}`}>
        {readMore ? info : shortText}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? " Show Less" : " Read More"}
        </button>
      </p>

      {/* Cypress looks for THIS EXACT ID */}
      <button
        id={`delete-btn-${id}`}
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </article>
  );
}

export default Tour;

