import { useState } from "react";

function Tour({ id, name, info, image, price }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />

      <p id={`tour-item-para-${id}`}>
        {readMore ? info : info.split(" ").slice(0, 200).join(" ")}
        {info.split(" ").length > 200 && (
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? " Show Less" : " Read More"}
          </button>
        )}
      </p>

      <button id={`delete-btn-${id}`}>
        Not Interested
      </button>
    </div>
  );
}

export default Tour;
