import React from "react";
import { useState } from "react";
import "./home.css";
import Product_category from "./Product_category";
import Topbar from "./Topbar";

export default function Home({ data, category }) {

  const [scrollY, setScrollY] = useState(0);
  const indx=Math.floor(scrollY/430);
  let myArray = Array.from(category);  

  const groupedData = data.reduce((grouped, item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
    return grouped;
  }, {});

  const sortedData = Object.values(groupedData).map((group) =>
    group.sort((a, b) => a.id - b.id)
  );


  return (
    <div className="maincontainer">
      <Topbar category={myArray} index={indx}/>
      <div className="container">
        <div className="sidebar">
          {myArray.map((d) => {
            return (
              <a
              href={'#'+d}
                key={d}
                value=""
                className={`${d} sidebtn`}
                style={{ backgroundColor: d==myArray[indx] ? '#5DA9E9' : 'transparent' }}
              >
                {d}
              </a>
            );
          })}
        </div>

        <div className="items">
          {sortedData.map((d) => {
            return <Product_category d={d} scrollY={scrollY} setScrollY={setScrollY} />;
          })}
        </div>
      </div>
    </div>
  );
}
