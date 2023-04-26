import React, { useEffect } from "react";
import { useContext } from "react";
import { popularContext } from "../context/Context";
// import { popularContext } from "@/context/Context";
import axios from "axios";
import Link from "next/link";
import CardPopular from "./Card/CardPopular";
const Popular = () => {
  const [movies, setMovies] = useContext(popularContext);
  // console.log(movies);

  const GetNowMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US&page=1`
    );

    setMovies(data.results);
    // console.log(data);
  };

  useEffect(() => {
    GetNowMovies();
  }, []);

  return (
    <>
      <CardPopular />
    </>
  );
};

export default Popular;
