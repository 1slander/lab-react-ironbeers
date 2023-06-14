import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"

const RandomBeer = () => {
  const [randomBeer,setRandomBeer]=useState({});

  const getRandomBeer = async ()=>{
    try {
      const res = await fetch('https://ih-beers-api2.herokuapp.com/beers/random');
      const data = await res.json();
      setRandomBeer(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getRandomBeer()
  },[])
  return (
    <>
    <Navbar/>
    <div className="beer-card single-beer">
    <img src={randomBeer.image_url} alt={randomBeer.name} className="beer-img" />
    <div className="beer-body">
       <div className="single-info-top">

        <h2 className="beer-tilte">{randomBeer.name}</h2>
        <p className="single-level">{randomBeer.attenuation_level}</p>
       </div>
       <div className="single-info-bottom">
        <h4 className="beer-subtitle">{randomBeer.tagline}</h4>
        <p className="single-date">{randomBeer.first_brewed}</p>

       </div>
        <p className="single-description">{randomBeer.description}</p>
        <p className="beer-text single-text"><span>Created by: </span> {randomBeer.contributed_by}</p>
      </div>
   </div>
    </>
  )
}

export default RandomBeer