import { Link } from "react-router-dom";

function Home() {
  return (
    <main >
      <style>
       
       {`
       body {
       background-color: lightblue;
       }
         .button-link  {
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
      } 
       
      section {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 2px 16px;
      }
      .directory-sections {
        display: flex;
        gap: 16px;
      }
      .directory-sections section {
        flex: 1;
      }
       
       `}
      </style>
      <div className="directory-sections">
      <section>
        <span >DCIT 26 • Laboratory Exercise 3</span>

        <Link className="button-link hero-button" to="/students">
        <br></br>
        View Students
        </Link>
        
      </section>
      <section>
        <span>{"DCIT 26 \u00E2\u20AC\u00A2 Laboratory Exercise 3"}</span>

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
