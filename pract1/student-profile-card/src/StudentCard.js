import "./StudentCard.css";

function StudentCard() {

  const student = {
    name: "Abhijit Mondal",
    rollNo: "2505102140001",
    course: "MSc IT",
    branch: "CSF",
    semester: "3rd Semester",
    email: "abimon1462@gmail.com",
    image: "https://i.pravatar.cc/200"
  };

  return (
    <div className="card">
      <img
        src={student.image}
        alt="Student"
        className="profile-image"
      />

      <h2>{student.name}</h2>

      <p><strong>Roll No:</strong> {student.rollNo}</p>

      <p><strong>Course:</strong> {student.course}</p>

      <p><strong>Branch:</strong> {student.branch}</p>

      <p><strong>Semester:</strong> {student.semester}</p>

      <p><strong>Email:</strong> {student.email}</p>
    </div>
  );
}

export default StudentCard;