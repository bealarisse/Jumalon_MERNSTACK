import Studentcomponent from "./components/studentcomponent.jsx";
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
    </div>
    
  );
}
export default App;