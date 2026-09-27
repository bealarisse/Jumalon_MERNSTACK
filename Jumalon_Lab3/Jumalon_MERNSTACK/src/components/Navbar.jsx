import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <Link className="brand" to="/">
          Home
        </Link>


        
      </div>
    </header>
  );
}

export default Navbar;
