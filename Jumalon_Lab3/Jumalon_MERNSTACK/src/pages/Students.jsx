import { Link } from "react-router-dom";
import Student from "../components/Student";


function Students({ students }) {
  return (
    <main>

      <section className="c">
        
        <p>Select a student card to view the complete student information.</p>
       
      </section>
      

      <section className="d">
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </section>
       <Link className="button-link" to="/form">
          Add New Student
        </Link>
    </main>
  );
}

export default Students;
