import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Form from "./pages/form";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Teachers from "./pages/Teachers";
import TeacherDetails from "./pages/TeacherDetails";
import TeacherForm from "./pages/TeacherForm";
import studentData from "./data/students.json";
import teacherData from "./data/teachers.json";

function App() {
  const [students, setStudents] = useState(studentData);
  const [teachers, setTeachers] = useState(teacherData);

  return (


    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students students={students} />} />
          <Route path="/students/:id" element={<StudentDetails students={students} />} />
          <Route path="/teachers" element={<Teachers teachers={teachers} />} />
          <Route path="/teachers/:id" element={<TeacherDetails teachers={teachers} />} />
          <Route path="/teacher-form" element={<TeacherForm teachers={teachers} setTeachers={setTeachers} />} />
          <Route path="/form" element={<Form students={students} setStudents={setStudents} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
