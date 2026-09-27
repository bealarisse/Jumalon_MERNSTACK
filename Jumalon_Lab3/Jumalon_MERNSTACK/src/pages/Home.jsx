import { Link } from "react-router-dom";

function Home() {
  return (
    <main >
      <div className="directory-sections">
      <section>
       

        <Link className="button-link hero-button" to="/students">
        <br></br>
        View Students
        </Link>
        
      </section>
      <section>
       

        <Link className="button-link hero-button" to="/teachers">
        <br></br>
        View Teachers
        </Link>
      </section>
      </div>
    </main>
  );
}

export default Home;
