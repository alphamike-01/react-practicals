import {useState} from "react";

function App(){

const [ram,setRam]=useState(0);

const [shyam,setShyam]=useState(0);

return(

<div>

<h2>Online Voting System</h2>

<button onClick={()=>setRam(ram+1)}>
Vote Ram
</button>

<h3>{ram}</h3>

<button onClick={()=>setShyam(shyam+1)}>
Vote Shyam
</button>

<h3>{shyam}</h3>

</div>

);

}

export default App;