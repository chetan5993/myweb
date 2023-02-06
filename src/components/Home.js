import React from 'react'
import { useState,useEffect } from 'react';
import  "./home.css"
import { useDispatch } from 'react-redux';
import {addProductToCart} from '../actions/cartActions';
// import { set } from 'core-js/core/dict';
import { set } from 'core-js';
import { removeFromCart } from '../actions/cartActions';
import Topbar from './Topbar';


export default function Home({data,category}) {
    const dispatch = useDispatch();

    const[product,setProduct]=useState(data)
    const [value,setValue]=useState([])
    const[cartitems,setCartItems]=useState([]);
    const [isToggled, setToggled] = useState(false);
// console.log(data)

// const arr=[];/
    const handleAddToCart = (product) => {
    
      
       
        dispatch(addProductToCart(product));
       setCartItems([...cartitems,product.id]);

      };    
    
    function handlerClick(category){
      setValue(category)
     
 const product=data.filter((p)=>
  p.category===category 

)
setProduct(product);
}


function handleRemoveFromCart(product){
  // console.log("click");
  let updatedIds = cartitems.filter(id => id !== product.id);
  // console.log(updatedIds)
  setCartItems(updatedIds);
  dispatch(removeFromCart(product));

}
//  console.log(cartitems)
// const  dta = data.filter((element) => element.category != `${value}`).map((obj)=>obj)
// console.log("dta", dta)
    
  return (
    <div className='maincontainer'>
        {/* <h2 className='App'>All Items</h2> */}
        
          <Topbar category={category} handlerClick={handlerClick}/>
        
        <div className="container">
        <div className="topbar">
        
        </div>
        <div className="sidebar">
      {category.map((d)=>{
        
         return (<button onClick={()=>handlerClick(d)} key={d} value=""  className='sidebtn'>{d}</button>)
         
      })}
       
          
          </div>

      <div className="items">
      {/* <h2 className='selectedCategory-Title'>{product[0]?.category}</h2>
      <br /><br /> */}


      {product.map((d)=>{
        // console.log(d)
        
            return (<div key={d.id} className="itembox">
              {/* <h3>{d.category}</h3> */}
                <div className="image"><img className='img' src={d.images[0]} />
                
                </div>
                <div className="title">Title :{d.title.substring(1, 6)}</div>
                <div className="title"> Price :$ {d.price}</div>
                {!cartitems.includes(d.id)?<button className='removebtn'  onClick={()=>handleAddToCart(d)}>+</button>
               : <button   className='removebtn'  onClick={()=>handleRemoveFromCart(d)}>-</button>}

            </div> )     
      })
      }
       {data.map((d)=>{
        // console.log(d)
        if(d.category!=product[0]?.category){
            return (<div key={d.id} className="itembox">

                <div className="image"><img className='img' src={d.images[0]} /></div>
                <div className="title">Title :{d.title.substring(0, 6)}</div>
                <div className="title"> Price :$ {d.price}</div>
                
                {!cartitems.includes(d.id)?<button className='removebtn'  onClick={()=>handleAddToCart(d)}>+</button>
               : <button   className='removebtn'  onClick={()=>handleRemoveFromCart(d)}>-</button>} 
 

            </div> ) 
        }    
      })
      }
    
    </div>
    </div>
    </div>
  )
}
