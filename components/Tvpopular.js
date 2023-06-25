import React, { useEffect } from "react";
import { useContext } from "react";
import { tvpopularContext } from "@/context/Contexttvpopular";
import axios from "axios";
import Link from "next/link";
import Navbar from "./Navbar";

const Tvpopular = () => {
  const [tvpopular, setTvpopular] = useContext(tvpopularContext);

  // console.log(tvpopular);

  const GetTvPopular = async () => {
    const { data } = await axios.get(`
  https://api.themoviedb.org/3/tv/popular?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US&page=1`);
    setTvpopular(data.results);
    // console.log(data);
  };

  useEffect(() => {
    GetTvPopular();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container  me-4 mt-5">
        {tvpopular.map((m) => (
          <div key={m.id}>
          <Link href={`TvPopular/${m.id}`}>
            <div className="popular-card  m-2 shadow  mb-2 bg-body-tertiary rounded">
              <div  className="card__all">
                <img
                  width={220}
                  src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                />
                <div  className="cardall__hover">
                  <h5 className="ps-3 text-white">{m.original_name}</h5>
                  <h5 className="text-white ps-3">{m.first_air_date}</h5>
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

export default Tvpopular;
