import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AllBeers = () => {
  const [beers,setBeers]=useState([])

  const getBeers = async () => {
    try {
      const res = await fetch('https://ih-beers-api2.herokuapp.com/beers');
    const data = await res.json();
    
    return setBeers(data)
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
    //fetch data
    getBeers()
  },[])
  return (
    <>
    <Navbar/>
    
    {beers.map((beer)=>{
      return (
      <Link to={`/beers/${beer._id}`} className="beer-link">
     <div className="beer-card" key={beer._id}>
      <img className="beer-img" src={beer.image_url} alt={beer.name} />
      <div className="beer-body">
        <h2 className="beer-tilte">{beer.name}</h2>
        <h4 className="beer-subtitle">{beer.tagline}</h4>
        <p className="beer-text"><span>Created by: </span> {beer.contributed_by}</p>
      </div>
     </div>

      </Link>
      )

    })}
    </>
  )
}

export default AllBeers