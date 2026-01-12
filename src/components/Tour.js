import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  const words = info.split(" ");
  const first200Words = words.slice(0, 200).join(" ");

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>{price}</h4>

      <p id={`tour-item-para-${id}`}>
        {showMore ? info : first200Words + "..."}

        {/* ✅ Render button ONLY if words > 200 */}
        {words.length > 200 && (
          <button
            id={showMore ? `see-less-${id}` : `see-more-${id}`}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See less" : "See more"}
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

