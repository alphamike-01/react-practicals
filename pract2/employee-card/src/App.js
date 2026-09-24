import EmployeeCard from "./EmployeeCard";

function App() {

  const employee = {
    name: "Rahul Sharma",
    id: "EMP101",
    department: "Information Technology",
    designation: "Software Developer",
    image: "https://i.pravatar.cc/200"
  };

  return (
    <div>
      <EmployeeCard employee={employee}/>
    </div>
  );
}

export default App;