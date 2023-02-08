import React from "react";
import './home.css'
const Topbar = ({category,handlerClick,index}) => {

  const cat= category.map((cate)=>{
    return
  })



  return (
    <div className="topbar">
      {category.map((d) => {
      
        return (
          <div   key={d} className="cat_list">
           <a
              href={'#'+d}
                key={d}
                value=""
                className={`${d} topbtn`}
                style={{ backgroundColor: d==category[index] ? '#5DA9E9' : 'transparent' }}
              >
             <i className="fa-solid fa-cart-shopping"></i>
              </a>
          <div  style={{ color: d==category[index] ? '#5DA9E9' : '#B6BAC3' }}
          className="category_text">{d}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Topbar;
