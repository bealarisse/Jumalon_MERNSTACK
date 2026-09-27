import { Link, useParams } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((item) => item.id === parseInt(id, 10));

  if (!student) {
    return (
      <main>
         {`
         .button-link  {
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
      }  `}
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
        
         .back-link  {
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

        `}
      </style>
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
