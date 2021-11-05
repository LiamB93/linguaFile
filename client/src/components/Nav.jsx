import { Link } from "react-router-dom"


function Nav(props) {
  const { currentUser, handleLogout } = props
  return (
    <nav>
      <Link to="/"><h1>LinguaFile</h1></Link>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (

        <Link to='/login'>Login</Link>

      )}

      <hr />
      {currentUser && (
        <div>
          <Link to='/words'>Words</Link>
          <Link to='/languages'>Languages</Link>
        </div>
      )}
    </nav>
  )
}
export default Nav;
