import Student from "../components/Student";
import students from "../data/students.json";

function Students() {
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
       
      .d {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 2px 16px;
      }
       
       `}
      </style>
      <section class="c">
        
        <p>Select a student card to view the complete student information.</p>
      </section>

      <section class = "d">
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </section>
    </main>
  );
}

export default Students;
