import { Link } from "react-router-dom";

function StudentList({ students, onDelete }) {
  if (!students.length) {
    return <div className="card empty">No students match your search.</div>;
  }

  return (
    <div className="card table-wrap">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Semester</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.semester}</td>
              <td>
                <div className="actions">
                  <Link className="edit" to={`/students/edit/${student._id}`}>Edit</Link>
                  <button className="delete" onClick={() => onDelete(student._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
