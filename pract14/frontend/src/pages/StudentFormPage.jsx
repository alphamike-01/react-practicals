import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import StudentForm from "../components/StudentForm";
import { addStudent, updateStudent } from "../store/studentsSlice";

const API_URL = import.meta.env.VITE_API_URL || "/api";
const blank = { name: "", email: "", course: "", semester: 1 };

function StudentFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isEditing = Boolean(id);
  const [student, setStudent] = useState(blank);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const loadStudent = async () => {
      try {
        const response = await fetch(`${API_URL}/students/${id}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Unable to load student.");
        setStudent(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadStudent();
  }, [id]);

  const handleSubmit = async (values) => {
    setError("");
    try {
      const response = await fetch(
        isEditing ? `${API_URL}/students/${id}` : `${API_URL}/students`,
        {
          method: isEditing ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Operation failed.");

      if (isEditing) dispatch(updateStudent(data));
      else dispatch(addStudent(data));

      navigate("/students");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="form-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">{isEditing ? "Update" : "Create"}</p>
          <h1>{isEditing ? "Edit Student" : "Add Student"}</h1>
          <p>{isEditing ? "Update the existing MongoDB record." : "Create a new database record."}</p>
        </div>
      </div>

      {error && <div className="alert error">{error}</div>}

      <StudentForm
        initialValue={student}
        isEditing={isEditing}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/students")}
      />

      <Link className="back-link" to="/students">← Back to Students</Link>
    </section>
  );
}

export default StudentFormPage;
