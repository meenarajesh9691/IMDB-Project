import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const popularId = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [images, setImages] = useState([]);

  const GetSingleImage = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US`
    );
    const data = await res.json();
    setImages(data.id);
    console.log(data);
  };
  useEffect(() => {
    GetSingleImage();
  }, []);

  console.log(images);

  
  return (
    <>
      <Navbar />

      <Link href={"/"}>
        {images
          ? images.map((m) => (
              <div key={m.id}>
                <img
                  height={250}
                  src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                />
              </div>
            ))
          : "loding....."}
      </Link>

      <div className="backposter__path container"></div>
      <div className="movies__details d-flex justify-content-center">
        <div className="poster__path">

        </div>
        <div className="movies__text">
          <h1>Scream</h1>
          <span>Lorem ipsum dolor sit amet </span>
          <div className="movies__ratings">
            <span>7.5 ⭐</span>
            <span>(350) Votes</span>
          </div>
          <h3>Release Date: 2023-4-12</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste similique rem aliquam quisquam. Consectetur eaque non dolores cum laboriosam, incidunt laudantium aliquid repudiandae perspiciatis, in eligendi eius!</p>
        </div>
      </div>
    </>
  );
};

export default popularId;
