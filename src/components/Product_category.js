import React, { useState, useEffect } from "react";
import "./home.css";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../actions/cartActions";
import { removeFromCart } from "../actions/cartActions";

function Product_category({ d, scrollY, setScrollY }) {
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dispatch = useDispatch();
  const [cartitems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
    setCartItems([...cartitems, product.id]);
  };

  function handleRemoveFromCart(product) {
    let updatedIds = cartitems.filter((id) => id !== product.id);
    setCartItems(updatedIds);
    dispatch(removeFromCart(product));
  }
  return (
    <div className="prod" id={d[0].category}>
   <h1>{d[0].category} &gt;</h1>
      <div className="product_collection">
        {d.map((p) => {
          return (
            <div key={p.id} className="itembox">
              <div className="image">
                <img className="img" src={p.images[0]} />
                {!cartitems.includes(p.id) ? (
                  <button
                    className="removebtn"
                    onClick={() => handleAddToCart(p)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    className="removebtn"
                    onClick={() => handleRemoveFromCart(p)}
                  >
                    -
                  </button>
                )}
              </div>
              <div className="price">$ {p.price}</div>
              <div className="title">{p.title.substring(0, 10)}...</div>
              <div className="lb">1 lb</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product_category;
