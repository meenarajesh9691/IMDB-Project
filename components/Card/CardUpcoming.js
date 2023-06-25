import React, { useContext } from "react";
import { upcomingContext } from "@/context/Contextupcoming";
import Link from "next/link";

const CardUpcoming = () => {
  const [upcoming, setUpcoming] = useContext(upcomingContext);

  // console.log(upcoming);

  return (
    <>
      <div className="container  me-4 mt-5">
        {upcoming.map((m) => (
          <Link href={`Upcoming/${m.id}`}>
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

export default CardUpcoming;
