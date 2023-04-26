import React, { createContext, useState } from "react";
export const nowContext = createContext(null);
const Contextnow = (props) => {
  const [now, setNow] = useState([]);
  // console.log(now);

  return (
    <>
      <nowContext.Provider value={[now, setNow]}>
        {props.children}
      </nowContext.Provider>
    </>
  );
};

export default Contextnow;
