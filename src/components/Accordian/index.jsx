import React from "react";
import data from "./data";
import { useState } from "react";

import "../Accordian/style.css";

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [enablemulti, setenablemulti] = useState(false);
  const [multisetid, setmultisetid] = useState([]);

  function handlesingleselection(id) {
    console.log(id);
    setselected(id === selected ? null : id);
  }

  function handlemultiselection(id) {
    let cpymultiplesetid = [...multisetid];
    const findindex = cpymultiplesetid.findIndex((item) => item === id);
    console.log(findindex);

    if (findindex === -1) {
  // id NOT selected yet
  cpymultiplesetid.push(id);   // SELECT it
} else {
  // id already selected
  cpymultiplesetid.splice(findindex, 1); // DESELECT it
}

    setmultisetid(cpymultiplesetid);
  }

  return (
    <div className="wrapper">
      <button className="btn" onClick={() => setenablemulti(!enablemulti)}>
        Enable multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={
                  enablemulti
                    ? () => handlemultiselection(dataitem.id)
                    : () => handlesingleselection(dataitem.id)
                }
                className="title"
              >
                <h3 className="h3">{dataitem.question}</h3>
                <span>+</span>
              </div>

              {enablemulti
                ? multisetid.indexOf(dataitem.id) !== -1 && (
                    <div className="content">{dataitem.answer}</div>
                  )
                : selected == dataitem.id && (
                    <div className="content">{dataitem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};
export default Accordian;
