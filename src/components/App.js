import React,{useState} from "react";
import "../styles/App.css";

const App = () => {
  const [toggle,settoggle] = useState(true)


const handler = () =>{
 settoggle(!toggle)
  
}
   return (

    <div id="main">
      {toggle?
   (<div id="welcome-div">
    <h1>Welcome to Newton School!!</h1>
    </div>):
      (<div id="about-div">
        <h1>Newton School is a neo-university providing highly immersive tech
      learning to millions of students, to tap into new-age tech opportunities.
      </h1>
      </div>)}
      <button id="toggle" onClick={handler}>Toggle</button>
    </div>
  );
};

export default App;
