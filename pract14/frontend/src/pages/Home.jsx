import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";

function Home() {
  return (
    <section>
      <div className="hero">
        <span className="badge">React Practical 14 • Capstone</span>
        <h1>Student Management System</h1>
        <p>
          A complete React CRUD application connected to a real MongoDB database.
        </p>
        <div className="hero-actions">
          <Link className="primary button-link" to="/students">View Students</Link>
          <Link className="secondary button-link" to="/students/add">Add Student</Link>
        </div>
      </div>

      <div className="stats">
        <StatCard title="Frontend" value="React" description="Components + Hooks" />
        <StatCard title="Navigation" value="Router" description="Multi-page SPA" />
        <StatCard title="State" value="Redux" description="Redux Toolkit Store" />
        <StatCard title="Database" value="MongoDB" description="Real CRUD operations" />
      </div>
    </section>
  );
}

export default Home;
