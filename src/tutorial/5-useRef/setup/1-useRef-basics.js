import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
   const refContainer = useRef(null);

   return (
      <>
         <form className="form">
            <div>
               <input type="text" ref={refContainer} />
               <button type="submit">Submit</button>
            </div>
         </form>
         <div>{}hello</div>
      </>
   );
};

export default UseRefBasics;
