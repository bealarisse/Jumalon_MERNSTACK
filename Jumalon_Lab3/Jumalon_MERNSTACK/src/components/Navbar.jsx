import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
        <style>
       
       {`
        
         .nav-container, .brand  {
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
      } 
       
    
       
       `}
       </style>
      <div>
        <Link className="brand" to="/">
          Home
        </Link>


        
      </div>
    </header>
  );
}

export default Navbar;
