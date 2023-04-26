import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";

const nowplayingId = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [images, setImages] = useState([]);

  const GetImage = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US&page=1`
    );
    // const json = await strdata.json();
    setImages(data.results);
    console.log(data);
  };
  useEffect(() => {
    GetImage();
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
                  key={m.id}
                  height={250}
                  src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                />
              </div>
            ))
          : "loding....."}
      </Link>
    </>
  );
};

export default nowplayingId;
