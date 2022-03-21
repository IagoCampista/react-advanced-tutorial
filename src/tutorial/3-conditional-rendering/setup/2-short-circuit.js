import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

// const firstValue = text || 'hello world';
// const secondValue = text && 'hello world';

const ShortCircuit = () => {
   const [text, setText] = useState("hello"); // valor inicialmente truthy por conter algo

   return (
      <>
         <h1>{text && "hello world 1"}</h1>{" "}
         {/*retorna a string hello world 1 pelo primeiro ser truthy*/}
         <h1>{!text && "hello world 2"}</h1>
         {/*retorna nada*/}
      </>
   );
};

export default ShortCircuit;
