import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ students, setStudents }) {
  const [name, setName] = useState("");
  const [studentnumber, setStudentnumber] = useState("");
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      studentnumber,
      course,
      section,
      email,
    };

    setStudents([...students, newStudent]);

    setName("");
    setStudentnumber("");
    setCourse("");
    setSection("");
    setEmail("");
    navigate("/students");
  };

  return (
    <main>
      <section>
        <h1>Add New Student</h1>

        <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />

        <br />
        <br />

        
        <input
          type="text"
          value={studentnumber}
          onChange={(e) => setStudentnumber(e.target.value)}
          placeholder="Enter student number"
        />

        <br />
        <br />

      
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter course"
        />

        <br />
        <br />

      
        <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          placeholder="Enter section"
        />

        <br />
        <br />

        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        <br />
        <br />

        <button type="submit">
          Add Student
        </button>
        </form>
      </section>
    </main>
  );
}
