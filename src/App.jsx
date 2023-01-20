import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const names=["sarves", "vicky","sargu"]
const user=[{name:"sarves",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"},{name:"vicky",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"},{name:"sargu",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFns-rvzQJdg1L0OU7Rmzp1PG_Q4pyMBoupw&usqp=CAU"}];
  return (
<div className='person'>
{user.map((nm)=>(<Person name={nm.name} pic={nm.pic}/>))}
</div>
  );
function Person({name,pic}){
return (
<div>
  <img src={pic}/>
<h1>Hello <span className='name'>{name}</span>💖</h1>
</div>
);
   
}}

export default App
