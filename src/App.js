import React,{useState,useEffect} from 'react'
import Nav from './Nav'
import  "./App.css"

import Home from './components/Home';
import Cart from './components/Cart';
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
export default function App() {

  const[data,setData]=useState([])
  const myset=new Set()

  const[category,setCategory]=useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
          .then(response => {
            // console.log(response)
response.data.products.map((data)=>{
myset.add(data.category)

})
setCategory(myset);
console.log(category)

            setData(response.data.products);

          })
          .catch(error => {
            console.error(error);
          });

      }, []);
  return (
    <div>
 <Nav/>
 <Routes>
 <Route index element={<Home data={data}  category={category}/>}/>
</Routes>
    </div>
  )
}