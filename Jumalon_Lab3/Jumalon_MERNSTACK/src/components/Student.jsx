import { Link } from "react-router-dom";

function Student({ student }) {
  return (
    <article className="student-card">
     

      <div>
        
        <h2>{student.name}</h2>
        <p>
          <strong>Student Number:</strong> {student.studentnumber}
        </p>
        <p>
          <strong>Course:</strong> {student.course}
        </p>
        <p>
          <strong>Section:</strong> {student.section}
        </p>
        <Link className="button-link" to={`/students/${student.id}`}>
          View Full Details
        </Link>
      </div>
    </article>
    
  );
}

export default Student;
