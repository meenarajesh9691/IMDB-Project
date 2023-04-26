import React, { useContext } from "react";
import { popularContext } from "@/context/Context";
import Link from "next/link";

const CardPopular = () => {
  const [movies, setMovies] = useContext(popularContext);
  // console.log(movies);

  return (
    <>
      <div className="container  me-4 mt-5">
        {movies.map((m) => (
          <Link href={`popular/${m.id}`}>
            <div className="popular-card  m-2 shadow  mb-2 bg-body-tertiary rounded">
              <div key={m.id} className="card__all">
                <img
                  width={220}
                  src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                />
                <div key={m.id} className="cardall__hover">
                  <h5 className="ps-3 text-white">{m.original_title}</h5>
                  <h5 className="text-white ps-3">{m.release_date}</h5>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardPopular;
