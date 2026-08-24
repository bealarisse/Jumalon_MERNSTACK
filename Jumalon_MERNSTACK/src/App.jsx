import Studentcomponent from "./components/studentcomponent.jsx";
import Subjectcomponent from "./components/subjectcomponent.jsx";
function App() {
  return(
    <div>
      <Studentcomponent 
      name="Bea Larisse" 
      age={20} 
      section="BSIT 3-1" 
      studentnumber="202403879" 
      course="Information Technology" />

       <Studentcomponent 
      name="Gericah" 
      age={20} 
      section="BSIT 3-1" 
      studentnumber="202406276" 
      course="Information Technology" />

      <Subjectcomponent 
      subjectname="DCIT26" 
      subjectcode={26} 
      />
    </div>

    
  );
}
export default App;