import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import '../Stars/style.css'
const Stars = ({ noOfStars = 5 }) => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);

  function handleClick(index) {
    console.log(index);
    setrating(index)
  }
  function handlemouseenter(index) {
    console.log(index);
    sethover(index)
    
  }
  function handlemouseleave(index) {
    console.log();
    sethover(rating)
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((st, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handlemouseenter(index)}
            onMouseLeave={() => handlemouseleave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Stars;
