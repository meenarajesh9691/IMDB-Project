import React, { useState } from "react";
import { createContext } from "react";
export const tvpopularContext = createContext(null);

const Contexttvpopular = (props) => {
  const [tvpopular, setTvpopular] = useState([]);
  // console.log(tvpopular);

  return (
    <>
      <tvpopularContext.Provider value={[tvpopular, setTvpopular]}>
        {props.children}
      </tvpopularContext.Provider>
    </>
  );
};

export default Contexttvpopular;
