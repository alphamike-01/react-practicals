import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent, deleteStudent } from "./main";

function StudentForm({ editing, onDone }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(editing || { name:"", email:"", course:"B.Sc. Computer Science", year:"1" });
  const set = (k,v) => setForm(f => ({...f, [k]:v}));
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    dispatch(editing ? updateStudent(form) : addStudent(form));
    onDone();
  }
  return <form className="form" onSubmit={submit}>
    <input value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Student name" />
    <input value={form.email} onChange={e=>set("email",e.target.value)} placeholder="Email" type="email" />
    <select value={form.course} onChange={e=>set("course",e.target.value)}>
      <option>B.Sc. Computer Science</option><option>BCA</option><option>MCA</option><option>M.Sc. Information Technology</option>
    </select>
    <select value={form.year} onChange={e=>set("year",e.target.value)}><option>1</option><option>2</option><option>3</option><option>4</option></select>
    <button className="primary">{editing ? "Update Student" : "Add Student"}</button>
  </form>;
}

function Dashboard() {
  const students = useSelector(s=>s.students.items);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState("");
  const filtered = students.filter(s => `${s.name} ${s.email} ${s.course}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="app container">
    <h1>Student Management System</h1>
    <div className="grid">
      <section className="panel">
        <h2>{editing ? "Edit Student" : "Add Student"}</h2>
        <StudentForm editing={editing} onDone={()=>setEditing(null)} />
        {editing && <button onClick={()=>setEditing(null)} style={{marginTop:8}}>Cancel</button>}
      </section>
      <section className="panel">
        <div style={{display:"flex",justifyContent:"space-between",gap:10,flexWrap:"wrap"}}>
          <h2>Students ({students.length})</h2>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search students..." style={{padding:10,border:"1px solid #d6dce7",borderRadius:8}} />
        </div>
        {filtered.map(s=><article className="student" key={s.id}>
          <div><strong>{s.name}</strong><div className="muted">{s.email} · {s.course} · Year {s.year}</div></div>
          <div className="student-actions">
            <button onClick={()=>setEditing(s)}>Edit</button>
            <button className="danger" onClick={()=>dispatch(deleteStudent(s.id))}>Delete</button>
          </div>
        </article>)}
        {!filtered.length && <p className="muted">No students found.</p>}
      </section>
    </div>
  </div>;
}

function Home() {
  const count = useSelector(s=>s.students.items.length);
  return <div className="route-page container"><h1>Student Portal</h1><p>Manage student records from a responsive React application.</p><span className="stat"><strong>{count}</strong> students</span><Link to="/students"> Open management dashboard →</Link></div>;
}
function About(){return <div className="route-page container"><h1>About</h1><p>This capstone demonstrates CRUD-style student management, search, forms, routing, React hooks, and Redux Toolkit.</p></div>}

export default function App(){
  return <>
    <header><nav className="nav"><strong>Student Portal</strong><div><Link to="/">Home</Link><Link to="/students">Students</Link><Link to="/about">About</Link></div></nav></header>
    <Routes><Route path="/" element={<Home/>}/><Route path="/students" element={<Dashboard/>}/><Route path="/about" element={<About/>}/></Routes>
  </>;
}
