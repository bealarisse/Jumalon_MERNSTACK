
function studentcomponent({name, age, section, studentnumber, course}) {
  return(
    <div>
    
       <p> Name: {name}</p>
       <p> Age: {age}</p>
       <p> Section: {section}</p>
       <p> Student Number: {studentnumber}</p>
       <p> Course: {course}</p>
    
    </div>
  );
}
export default studentcomponent;