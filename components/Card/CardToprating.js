import React, { useContext } from "react";
import { topratingContext } from "@/context/Contexttoprating";
import Link from "next/link";

const CardToprating = () => {
  const [toprating, setToprating] = useContext(topratingContext);

  return (
    <>
      <div className="container  me-4 mt-5">
        {toprating.map((m) => (
          <div key={m.id}>
            <Link href={`TopRating/${m.id}`}>
              <div className="popular-card  m-2 shadow  mb-2 bg-body-tertiary rounded">
                <div className="card__all">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default CardToprating;
