function Teacher({ teacher }) {
  return (
    <article className="student-card">
      <div>
        <h2>{teacher.name}</h2>
        <p><strong>Subject:</strong> {teacher.subject}</p>
        <p><strong>Department:</strong> {teacher.department}</p>
        <p><strong>Email:</strong> {teacher.email}</p>
      </div>
    </article>
  );
}

export default Teacher;
