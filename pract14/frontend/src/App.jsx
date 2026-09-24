import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentFormPage from "./pages/StudentFormPage";
import About from "./pages/About";

function App() {
  const navClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <>
      <header className="topbar">
        <div className="brand">Student<span>Manager</span></div>
        <nav>
          <NavLink className={navClass} to="/">Home</NavLink>
          <NavLink className={navClass} to="/students">Students</NavLink>
          <NavLink className={navClass} to="/students/add">Add Student</NavLink>
          <NavLink className={navClass} to="/about">About</NavLink>
        </nav>
      </header>

      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/add" element={<StudentFormPage />} />
          <Route path="/students/edit/:id" element={<StudentFormPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
