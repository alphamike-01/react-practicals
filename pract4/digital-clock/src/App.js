import {useState,useEffect} from "react";

function App(){

const [time,setTime]=useState(new Date());

const [dark,setDark]=useState(false);

useEffect(()=>{

const timer=setInterval(()=>{

setTime(new Date());

},1000);

return ()=>clearInterval(timer);

},[]);

return(

<div style={{

background:dark?"black":"white",

color:dark?"white":"black",

height:"100vh",

textAlign:"center"

}}>

<h1>{time.toLocaleTimeString()}</h1>

<button onClick={()=>setDark(!dark)}>
Change Theme
</button>

</div>

);

}

export default App;