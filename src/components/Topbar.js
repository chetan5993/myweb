import React from "react";
import './home.css'
const Topbar = ({category,handlerClick}) => {
  return (
    <div className="topbar">
      {category.map((d) => {
        console.log(d)
        return (
            <div>
          <button
            onClick={() => handlerClick(d)}
            key={d.id}
            value=""
            className="topbtn"
          >
            {d.substring(0,10)}
          </button>
          </div>
        );
      })}
    </div>
  );
};

export default Topbar;
