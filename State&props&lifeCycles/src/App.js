import React, { useState } from "react";
import Counter from "./Counter";
import Estate from "./Estate";
import Example from "./Example";


function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      {/* <Example/> */}

    
      {/* <Estate/> */}
      <button onClick={()=> setToggle(!toggle)} >
        {toggle ? "Hide": "Show"}
      </button>
      {toggle && <Counter/>}
      
    </div>
  );
}

export default App;
