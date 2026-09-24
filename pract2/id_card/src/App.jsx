import Employee from "./Employee";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-start pt-40 bg-gray-100">
      <div className="flex flex-wrap justify-center gap-4">
        <Employee
          img="/combat.jpg"
          name="Employee-1"
          id="EMP-001"
          dep="Sales"
          pos="HR"
          phone="0099887766"
          email="employee1@gmail.com"
        />

        <Employee
          img="/commbat.jpg"
          name="Employee-2"
          id="EMP-002"
          dep="IT"
          pos="Developer"
          phone="0399887766"
          email="employee2@gmail.com"
        />

        <Employee
          img="/combat.jpg"
          name="Employee-3"
          id="EMP-003"
          dep="Finance"
          pos="Accountant"
          phone="0499887766"
          email="employee3@gmail.com"
        />
      </div>
    </div>
  );
}

export default App;