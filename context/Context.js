import React, { createContext, useState } from "react";
export const popularContext = createContext(null);

const Context = (props) => {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <popularContext.Provider value={[movies, setMovies]}>
        {props.children}
      </popularContext.Provider>
    </>
  );
};

export default Context;
