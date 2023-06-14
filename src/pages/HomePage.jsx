import { Link } from "react-router-dom"

import Card from "../components/Card"
import beersImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png'

const HomePage = () => {
  return (
    <div>
    <Link className="home-link" to={'/beers'}>
     <Card image={beersImg} title={'All Beers'}/>
    </Link>
    <Link to={'/random-beer'} className="home-link">

     <Card image={randomBeerImg} title={'Random Beer'}/>
    </Link>

    <Link to={'new-beer'} className="home-link">

     <Card image={newBeerImg} title={'New Beer'}/>
    </Link>
    </div>
  )
}

export default HomePage