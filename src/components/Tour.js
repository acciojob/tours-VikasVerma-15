import { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  const words = info.split(" ");
  const first200Words = words.slice(0, 200).join(" ");
  const hasMoreThan200Words = words.length > 200;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>{price}</h4>

      {/* REQUIRED by Cypress */}
      <p id={`tour-item-para-${id}`}>
        {readMore || !hasMoreThan200Words ? info : first200Words}

        {hasMoreThan200Words && (
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? " Show Less" : " Read More"}
          </button>
        )}
      </p>

      {/* REQUIRED by Cypress */}
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


