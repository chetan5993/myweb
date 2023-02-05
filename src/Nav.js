import React from 'react'
import  "./Nav.css"
import { Outlet, Link } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';

function Nav() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
  return (
    <div>
       <div className="main">
        <div className="heading"> <h3>My shopping app</h3></div>
        <div className="right">
            <div className="home">Home</div>
            <div className="cart"> <i className="fa-solid fa-cart-shopping"></i><span>{cart.length}</span> </div>
        </div>
        </div> 
    </div>
  )
}

export default Nav