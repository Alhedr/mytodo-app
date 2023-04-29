import './Nav.css'
import { Link } from "react-router-dom";

import {auth} from "./firebase";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut().then(() => navigate("/login"));
  };

  return (
    <div>
      <header>
        <nav>
          <button className='home-btn'>
            <Link to="/">Home</Link>
          </button>

          <button className='cont-btn'>
            <Link to="/ContactUs">Contact Us</Link>
          </button>

          <button className='viw-btn'>
            <Link to="/ViewDetails">Tasks</Link>
          </button>

          <button className='creat-btn'>
            <Link to="/CreateTask">Create a new Task</Link>
          </button>
         
            
          <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
