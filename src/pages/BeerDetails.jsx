import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar";
const BeerDetails = (props) => {
 const [foundBeer,setFoundBeer]= useState({})
 const {beerId} = useParams();
 


 

 useEffect(()=>{
const findBeer = async ()=>{
  try {
   const res = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
   const data = await res.json();
   console.log(data)
   setFoundBeer(data);
   
  } catch (error) {
   console.log(error)
  }
 }
  findBeer()
 },[beerId])
 
  return (
    <>
    <Navbar/>
    <div className="beer-card single-beer">
    <img src={foundBeer.image_url} alt={foundBeer.name} className="beer-img" />
    <div className="beer-body">
       <div className="single-info-top">

        <h2 className="beer-tilte">{foundBeer.name}</h2>
        <p className="single-level">{foundBeer.attenuation_level}</p>
       </div>
       <div className="single-info-bottom">
        <h4 className="beer-subtitle">{foundBeer.tagline}</h4>
        <p className="single-date">{foundBeer.first_brewed}</p>

       </div>
        <p className="single-description">{foundBeer.description}</p>
        <p className="beer-text single-text"><span>Created by: </span> {foundBeer.contributed_by}</p>
      </div>
   </div>


    </>
  )
}

export default BeerDetails