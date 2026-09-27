import { Link, useParams } from "react-router-dom";

function TeacherDetails({ teachers }) {
  const { id } = useParams();
  const teacher = teachers.find((item) => item.id === parseInt(id, 10));

  if (!teacher) {
    return <main><section><h1>Teacher Not Found</h1><p>No teacher matches the selected ID.</p><Link className="button-link" to="/teachers">Back to Teachers</Link></section></main>;
  }

  return (
    <main>
      <style>{`
        body { background-color: lightblue; }
        .button-link, .back-link { color: #2563eb; text-decoration: none; font-weight: 600; }
        section { box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border-radius: 5px; padding: 2px 16px; }
      `}</style>
      <section>
        <Link className="back-link" to="/teachers">Back to Teachers</Link>
        <div><div><span>Teacher Details</span><h1>{teacher.name}</h1><p>{teacher.email}</p></div></div>
        <div>
          <div><span>Age</span><strong>{teacher.age}</strong></div>
          <div><span>Subject</span><strong>{teacher.subject}</strong></div>
          <div><span>Department</span><strong>{teacher.department}</strong></div>
          <div><span>Email</span><strong>{teacher.email}</strong></div>
        </div>
      </section>
    </main>
  );
}

export default TeacherDetails;
