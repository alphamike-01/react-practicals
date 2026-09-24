import {useState} from "react";

function App(){

const [student,setStudent]=useState({

name:"",

email:"",

course:""

});

function handleChange(e){

setStudent({

...student,

[e.target.name]:e.target.value

});

}

return(

<div>

<input

name="name"

placeholder="Name"

onChange={handleChange}

/>

<input

name="email"

placeholder="Email"

onChange={handleChange}

/>

<input

name="course"

placeholder="Course"

onChange={handleChange}

/>

<h3>{student.name}</h3>

<h3>{student.email}</h3>

<h3>{student.course}</h3>

</div>

);

}

export default App;