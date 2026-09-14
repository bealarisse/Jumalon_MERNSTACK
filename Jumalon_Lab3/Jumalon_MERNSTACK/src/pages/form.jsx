import { useState } from "react";

export default function Form() {
  const [counter, setCounter] = useState(0);

  const [name, setName] = useState("");
  const [studentnumber, setStudentnumber] = useState("");
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");
  const [email, setEmail] = useState("");

  const [information, setInformation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInformation = {
      name,
      studentnumber,
      course,
      section,
      email,
    };

    setInformation([...information, newInformation]);

    setName("");
    setStudentnumber("");
    setCourse("");
    setSection("");
    setEmail("");
  };

  return (
    <main>
      <section>
        <h1>Add New Student</h1>

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

        <button onClick={handleSubmit}>
          Add Student
        </button>

        <br />
        <br />

        
        {information.map((info, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <h2>{info.name}</h2>

            <p>
              <strong>Student Number:</strong>{" "}
              {info.studentnumber}
            </p>

            <p>
              <strong>Course:</strong> {info.course}
            </p>

            <p>
              <strong>Section:</strong> {info.section}
            </p>

            <p>
              <strong>Email:</strong> {info.email}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}