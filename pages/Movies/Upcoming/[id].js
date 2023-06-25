import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";

const upComingId = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [images, setImages] = useState(null);

  const GetSingleImage = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US&page=1`
    );
    // const json = await strdata.json();
    setImages([res.data]);
  };
  useEffect(() => {
    if (!images) GetSingleImage();
  }, [images]);
  console.log(images);
  return (
    <>
      <Navbar />
      {images
        ? images.map((m) => (
            <div key={m.id}>
              <div className="main_container">
                <img
                  className="poster_img"
                  src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                />
                {
                  <img
                    className="back_drop_img"
                    src={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`}
                  />
                }
              </div>
              <div className="backdrop_box">
                <h1>
                  {m.original_title} (<span id="date">{m.release_date} </span>)
                </h1>
                <h3>{m.tagline}</h3>
                <h5>Rating:-{m.vote_average}</h5>
                <p>{m.overview}</p>
              </div>
            </div>
          ))
        : "loding....."}
    </>
  );
};

export default upComingId;
