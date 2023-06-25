import React, { useContext } from "react";
import { nowContext } from "@/context/Contextnow";
import Link from "next/link";

const CardHome = () => {
  const [now, setNow] = useContext(nowContext);
  // console.log(now);
  return (
    <>
      <h2 className="container alert alert-secondary w-25 mt-5 text-center">
        Movies List
      </h2>
      <div className="container outer p-5  d-flex mt-5">
        {now &&
          now.map((m) => (
            <div key={m.id}>
              <Link href={`Movies/popular/${m.id}`} className="home__textstyle">
                <div className="card m-2 shadow p-3 mb-5 bg-body-tertiary rounded">
                  <img
                    height={250}
                    src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                  />
                  <h4 className="fs-5 ps-2 py-2">{m.original_title}</h4>
                  <h4 className="fs-5 ps-2 text-secondary ">
                    {m.release_date}
                  </h4>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardHome;
