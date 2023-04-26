import React, { createContext, useState } from "react";
export const upcomingContext = createContext(null);

const Contextupcoming = (props) => {
  const [upcoming, setUpcoming] = useState([]);

  // console.log(upcoming);

  return (
    <>
      <upcomingContext.Provider value={[upcoming, setUpcoming]}>
        {props.children}
      </upcomingContext.Provider>
    </>
  );
};

export default Contextupcoming;
