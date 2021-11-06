import { Link } from "react-router-dom"
import './Nav.css'


function Nav(props) {
  const { currentUser, handleLogout } = props
  return (


    <nav>
      <Link to="/"><h1 className="logo">LinguaFile</h1></Link>
      {currentUser ? (
        <div className="nav">
          <div className="current-user">
            <p>Welcome, {currentUser.username}</p>
            <button className="button cursor-pointer" onClick={handleLogout}>Logout</button>
          </div>
          <div className="links">
            <Link to='/words'>Words</Link>
            <Link to='/languages'>Languages</Link>
          </div>
        </div>

      ) : (

        <Link to='/login'>Login</Link>

      )}
    </nav>

  )
}
export default Nav;
