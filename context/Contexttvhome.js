import React, { createContext, useState } from "react";
export const tvhomeContext = createContext(null);

const Contexttvhome = (props) => {
  const [airshow, setAirshow] = useState([]);
  // console.log(airshow);

  return (
    <>
      <tvhomeContext.Provider value={[airshow, setAirshow]}>
        {props.children}
      </tvhomeContext.Provider>
    </>
  );
};

export default Contexttvhome;
