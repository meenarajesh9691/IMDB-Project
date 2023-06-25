import React, { useContext } from "react";
import { nowContext } from "@/context/Contextnow";

const Header = () => {
  const [now, setNow] = useContext(nowContext);
  // console.log(now);

  return (
    <>
      <div className="  container-fluid header__img ">
        <div className="box w-50">
          <div className=" heading  ps-5">
            <h1>Welcome.</h1>
            <h1>
              Millions of movies, TV shows and people to discover. Explore now.
            </h1>
          </div>

          <form className="d-flex  ps-5 w-75 mt-5" role="search">
            <input
              className="form-control  fs-5 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-danger rounded-pill ms-2 " type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
