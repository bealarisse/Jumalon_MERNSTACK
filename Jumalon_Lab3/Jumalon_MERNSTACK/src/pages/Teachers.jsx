import { Link } from "react-router-dom";
import Teacher from "../components/Teacher";

function Teachers({ teachers }) {
  return (
    <main>
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
