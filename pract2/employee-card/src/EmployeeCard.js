import "./EmployeeCard";

function EmployeeCard({ employee }) {

  return (
    <div className="card">
      <img src={employee.image} alt="Employee" />

      <h2>{employee.name}</h2>

      <p><b>Employee ID:</b> {employee.id}</p>

      <p><b>Department:</b> {employee.department}</p>

      <p><b>Designation:</b> {employee.designation}</p>
    </div>
  );
}

export default EmployeeCard;