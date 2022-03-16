import React, { useState } from "react";

const UseStateBasics = () => {
   const [counter, setCounter] = useState(0);

   const increment = () => {
      setCounter(counter + 1);
   };
   const decrement = () => {
      setCounter(counter - 1);
   };
   const reset = () => {
      setCounter(0);
   };

   return (
      <React.Fragment>
         <h1>{counter}</h1>
         <button type="button" className="btn" onClick={decrement}>
            Decrement
         </button>
         <button type="button" className="btn" onClick={reset}>
            Reset
         </button>
         <button type="button" className="btn" onClick={increment}>
            Increments
         </button>
      </React.Fragment>
   );
};

export default UseStateBasics;
