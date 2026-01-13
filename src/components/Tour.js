import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  const shouldShowButton = info.length > 200;
  let shortText = info.length > 200 ? info.slice(0, 200) : info;

  const lastSpaceIndex = shortText.lastIndexOf(" ");
  shortText = lastSpaceIndex > 0 ? shortText.slice(0, lastSpaceIndex) : shortText;
  
  return (
    <div className="single-tour">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4 className="tour-price">{price}</h4>
      <p id={`tour-item-para-${id}`} className="tour-info">
        {showMore ? info : shortText}
      </p>
      {shouldShowButton && (
        <button
          id={showMore ? `see-less-${id}` : `see-more-${id}`}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See less" : "See more"}
        </button>
      )}

      <button className="delete-btn" id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Tour;






