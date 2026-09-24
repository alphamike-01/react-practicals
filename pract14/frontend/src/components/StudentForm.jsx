import { useEffect, useState } from "react";

const blank = { name: "", email: "", course: "", semester: 1 };

function StudentForm({ initialValue, isEditing, onSubmit, onCancel }) {
  const [form, setForm] = useState(initialValue || blank);

  useEffect(() => {
    setForm(initialValue || blank);
  }, [initialValue]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: name === "semester" ? Number(value) : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="student-form card" onSubmit={handleSubmit}>
      <label>
        Full Name
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>

      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </label>

      <label>
        Course
        <input name="course" value={form.course} onChange={handleChange} placeholder="B.Tech CSE" required />
      </label>

      <label>
        Semester
        <select name="semester" value={form.semester} onChange={handleChange}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>Semester {n}</option>
          ))}
        </select>
      </label>

      <div className="form-actions">
        <button className="primary" type="submit">
          {isEditing ? "Update Student" : "Add Student"}
        </button>
        {isEditing && (
          <button className="secondary" type="button" onClick={onCancel}>Cancel</button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;
