import { Link } from "react-router-dom"
import './Nav.css'


function Nav(props) {
  const { currentUser, handleLogout } = props
  return (


    <nav>
      <Link to="/"><h1 className="logo">LinguaFile</h1></Link>
      {currentUser ? (
        <div className="nav">
          <div className="my-languages">
            {/* <Link to='/words'>Words</Link> */}
            <Link to='/languages'>My Languages</Link>
          </div>
          <div className="current-user">
            <p>Welcome, {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>

          </div>
        </div>


      ) : (

        <Link className="login" to='/login'>Login</Link>

      )}
    </nav>

  )
}
export default Nav;
