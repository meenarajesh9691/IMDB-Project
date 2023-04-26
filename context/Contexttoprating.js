import React, { createContext, useState } from "react";
export const topratingContext = createContext(null);

const Contexttoprating = (props) => {
  const [toprating, setToprating] = useState([]);

  console.log(toprating);

  return (
    <>
      <topratingContext.Provider value={[toprating, setToprating]}>
        {props.children}
      </topratingContext.Provider>
    </>
  );
};

export default Contexttoprating;
