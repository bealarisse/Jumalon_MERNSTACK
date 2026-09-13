import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
        <style>
       
       {`
       
         .nav-container  {
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
      } 
       
    
       
       `}
       </style>
      <div className="nav-container">
        <Link className="brand" to="/">
          Home
        </Link>

        
      </div>
    </header>
  );
}

export default Navbar;
