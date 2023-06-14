import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHouse } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faHouse} />

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link className="nav-link" to={'/'}>
    {element}
    
    </Link>

    </nav>
  )
}

export default Navbar