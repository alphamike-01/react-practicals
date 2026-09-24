import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentList from "../components/StudentList";
import { fetchStart, fetchSuccess, fetchFailure, removeStudent } from "../store/studentsSlice";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function Students() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.students);
  const [search, setSearch] = useState("");

  const loadStudents = async () => {
    dispatch(fetchStart());
    try {
      const response = await fetch(`${API_URL}/students`);
      if (!response.ok) throw new Error("Unable to fetch students.");
      const data = await response.json();
      dispatch(fetchSuccess(data));
    } catch (err) {
      dispatch(fetchFailure(err.message));
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const filteredStudents = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return items;
    return items.filter((student) =>
      [student.name, student.email, student.course]
        .some((value) => value.toLowerCase().includes(term))
    );
  }, [items, search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student from the database?")) return;

    try {
      const response = await fetch(`${API_URL}/students/${id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Delete failed.");
      dispatch(removeStudent(id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Read + Search</p>
          <h1>Students</h1>
          <p>Records are fetched from MongoDB through the REST API.</p>
        </div>
        <span className="count">{filteredStudents.length}</span>
      </div>

      <div className="search-card card">
        <input
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or course..."
        />
      </div>

      {loading && <div className="card empty">Loading students...</div>}
      {error && <div className="alert error">{error}</div>}
      {!loading && !error && <StudentList students={filteredStudents} onDelete={handleDelete} />}
    </section>
  );
}

export default Students;
