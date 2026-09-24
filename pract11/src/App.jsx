import { Link, Route, Routes } from "react-router-dom";

const courses = ["B.Sc. Computer Science", "BCA", "M.Sc. Information Technology", "MCA"];
const faculty = [
  { name: "Dr. Priya Sharma", role: "Professor · Computer Science" },
  { name: "Prof. Rahul Sen", role: "Assistant Professor · Information Technology" },
  { name: "Dr. Neha Patel", role: "Associate Professor · Data Science" },
];

function Layout({ children }) {
  return <>
    <header><nav className="nav"><strong>Parul University</strong><div>
      <Link to="/">Home</Link><Link to="/courses">Courses</Link><Link to="/faculty">Faculty</Link><Link to="/contact">Contact</Link>
    </div></nav></header>
    <main className="container page">{children}</main>
    <footer>Parul University · College Information Portal</footer>
  </>;
}

function Home(){ return <div className="hero"><h1>Welcome to Parul University</h1><p>Explore academic programmes, faculty information, and contact details through a multi-page React portal.</p><div className="cards"><div className="card"><h3>Academic Programmes</h3><p>Undergraduate and postgraduate technology programmes.</p></div><div className="card"><h3>Student Support</h3><p>Information about departments, faculty, and campus services.</p></div></div></div>; }
function Courses(){ return <><h1>Courses</h1><div className="cards">{courses.map(c=><div className="card" key={c}><h3>{c}</h3><p>Programme information, curriculum, and academic resources.</p></div>)}</div></>; }
function Faculty(){ return <><h1>Faculty</h1><div className="cards">{faculty.map(f=><div className="card" key={f.name}><h3>{f.name}</h3><p>{f.role}</p></div>)}</div></>; }
function Contact(){ return <div className="card"><h1>Contact</h1><p>Email: admissions@paruluniversity.ac.in</p><p>Phone: +91 00000 00000</p><p>Address: Wagodia, TA Limbda, Vadodara, Gujrat</p></div>; }
function App(){ return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/courses" element={<Courses/>}/><Route path="/faculty" element={<Faculty/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></Layout>; }

export default App;
