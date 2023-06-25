import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link className="navbar-brand" href={"/"}>
            <img src="/images/tmdb-logo.png" alt="" width={200} />
          </Link>
          <button
            className="navbar-toggler text-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar_toggler_icon fs-1 ">
              <i className="ri-menu-line"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  href="/Movies"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movies
                </Link>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="navbarDropdownMenuLink"
                >
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
                  href={"/"}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tv Show
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" href="/TvShow/TvPopular">
                     TvPopular
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/TvShow/AiringToday">
                      Airing Today
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="TvShow/OnTv">
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
