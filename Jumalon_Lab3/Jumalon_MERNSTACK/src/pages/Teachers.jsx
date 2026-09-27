import { Link } from "react-router-dom";
import Teacher from "../components/Teacher";

function Teachers({ teachers }) {
  return (
    <main>
      <style>{`
        body { background-color: lightblue; }
        .button-link { color: #2563eb; text-decoration: none; font-weight: 600; }
        .d { box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; border-radius: 5px; padding: 2px 16px; }
      `}</style>
      <section className="c">
        <p>Select a teacher card to view the complete teacher information.</p>
      </section>
      <section className="d">
        {teachers.map((teacher) => <Teacher key={teacher.id} teacher={teacher} />)}
      </section>
      <Link className="button-link" to="/teacher-form">Add New Teacher</Link>
    </main>
  );
}

export default Teachers;
