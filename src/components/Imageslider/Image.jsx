import React, { useEffect } from "react";
import { useState } from "react";
import "../Imageslider/style.css";
const Image = ({ url, limit }) => {
  const [images, setimages] = useState([]);
  const [currentslide, setcurrentslide] = useState(0);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchImage(geturl) {
    try {
      setloading(false);
      const response = await fetch(`${geturl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setimages(data);
        setloading(false);
      }
    } catch (error) {
      seterror(error.message);
    }
  }
  console.log(images);

  function handlePrevious() {
    setcurrentslide(currentslide === 0 ? images.length - 1 : currentslide - 1);
  }
  function handlenext() {
    setcurrentslide(currentslide === images.length - 1 ? 0 : currentslide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error !== null) {
    return <div>Error occured : {error}</div>;
  }

  return (
    <div className="container">
      <div className="arrow left" onClick={handlePrevious}>
        {" "}
        &lt;{" "}
      </div>
      {images && images.length > 0 ? (
        images.map((imageitem, index) => (
          <img
            className={
              currentslide === index
                ? " current-image"
                : "current-image hide-current-image"
            }
            key={imageitem.id}
            src={imageitem.download_url}
            alt=""
          />
        ))
      ) : (
        <div>No Image</div>
      )}
      <div className="arrow right" onClick={handlenext}>
        {" "}
        &gt;{" "}
      </div>

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className={ currentslide === index ? " current-indicator" : "current-indicator inactive-indicator"}></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Image;
