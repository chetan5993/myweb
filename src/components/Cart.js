import React from 'react'
import{useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart,resetCart } from '../actions/cartActions';
import Home from './Home';
// import  "./App.css"
import  "./home.css"


function Cart() {
  // const[total,setTotal]=useState(0);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  // const sum = cart.reduce((acc, cur) => {
  //   return acc + cur.price;
  // }, 0);

  
  
  
  return (
    <div>
      

        
        <div className="maindiv">
      
      
     
     
    </div>
    </div>
  )
}

export default Cart