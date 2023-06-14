import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
const ErrorPage = () => {
  return (
    <div>
    <Navbar/>
    <h2>404</h2>
    <p>Page doesn't exist</p>
    <Link to='/'>Home</Link>
    
    </div>
  )
}

export default ErrorPage
