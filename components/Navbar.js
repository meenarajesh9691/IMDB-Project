import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-dark ">
        <div className="container">
          <Link className="navbar-brand" href={"/"}>
            <img src="/images/tmdb-logo.png" alt="" width={200} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown white">
                <Link
                  className="nav-link dropdown-toggle text-white "
                  href={"/movies/id"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movies
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/Movies/popular">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/Movies/TopRating">
                      Top Rating
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/Movies/Upcoming">
                      Upcoming
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  href={"/TvShows/id"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TvShow
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/TvShow/TvPopular">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/tvShow/AiringToday">
                      Airing Today
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="">
                      On Tv
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
