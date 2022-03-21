import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
   const [value, setValue] = useState(0);
   const [value1, setValue1] = useState(0);
   const [resultValue, setResultValue] = useState(0);
   const [resultValue1, setResultValue1] = useState(0);

   useEffect(() => {
      setResultValue(value);
   }, [value1]);
   // teste de como o useffect funciona
   // usando a atualizacao de um valor com o useEffect que so
   //atualiza quando um certo valor é atualizado setado como segundo
   //argumento da funcao independente do que esta em seu interior
   return (
      <>
         <h2>useEffect Basics</h2>
         <h3>{value}</h3>
         <button className="btn" onClick={() => setValue(value + 1)}>
            Increment
         </button>
         <button className="btn" onClick={() => setValue(0)}>
            reset
         </button>
         <p></p>
         <hr></hr>

         <h3>{value1}</h3>
         <button className="btn" onClick={() => setValue1(value1 + 1)}>
            Increment
         </button>
         <button className="btn" onClick={() => setValue1(0)}>
            reset
         </button>
         <p></p>
         <hr></hr>
         <h3>Result 0: {resultValue}</h3>
         <h3>Result 1: {resultValue1}</h3>
      </>
   );
};

export default UseEffectBasics;
