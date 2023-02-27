import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link  to="/">
        <button className="btn btnhover">Home</button>
        
      </Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button className="btn btnhover">Profile</button>
          </Link>
          <br/>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button className="btn btnhover">Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button className="btn btnhover">Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
