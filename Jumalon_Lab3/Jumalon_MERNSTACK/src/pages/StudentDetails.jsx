import { Link, useParams } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((item) => item.id === parseInt(id, 10));

  if (!student) {
    return (
      <main>
        <section>
          <h1>Student Not Found</h1>
          <p>No student matches the selected ID.</p>
          <Link className="button-link" to="/students">
            Back to Students
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <Link className="back-link" to="/students">
          ← Back to Students
        </Link>

        <div >
          
          <div>
            <span>Student Details</span>
            <h1>{student.name}</h1>
            <p>{student.studentnumber}</p>
          </div>
        </div>

        <div>
          <div>
            <span>Age</span>
            <strong>{student.age}</strong>
          </div>
          <div>
            <span>Section</span>
            <strong>{student.section}</strong>
          </div>
          <div>
            <span>Course</span>
            <strong>{student.course}</strong>
          </div>
          <div>
            <span>Student Number</span>
            <strong>{student.studentnumber}</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StudentDetails;
