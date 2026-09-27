import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherForm({ teachers, setTeachers }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setTeachers([
      ...teachers,
      { id: Date.now(), name, subject, department, email },
    ]);
    setName("");
    setSubject("");
    setDepartment("");
    setEmail("");
    navigate("/teachers");
  }

  return (
    <main>
      <section>
        <h1>Add New Teacher</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name" />
          <br /><br />
          <input type="text" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Enter subject" />
          <br /><br />
          <input type="text" value={department} onChange={(event) => setDepartment(event.target.value)} placeholder="Enter department" />
          <br /><br />
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
          <br /><br />
          <button type="submit">Add Teacher</button>
        </form>
      </section>
    </main>
  );
}
