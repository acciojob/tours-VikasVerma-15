import { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const words = info.split(" ");

  return (
    <article>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>${price}</h4>

      <p id={`tour-item-para-${id}`}>
        {readMore ? info : words.slice(0, 200).join(" ")}
        {words.length > 200 && (
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
    </article>
  );
}

export default Tour;

