import { useEffect } from "react";
import { useContext } from "react";
import { topratingContext } from "@/context/Contexttoprating";
import axios from "axios";
import CardToprating from "./Card/CardToprating";

const Toprating = () => {
  const [toprating, setToprating] = useContext(topratingContext);

  // console.log(toprating);

  const GetUpcomingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US&page=1`
    );

    setToprating(data.results);
    // console.log(data);
  };

  useEffect(() => {
    GetUpcomingMovies();
  }, []);

  return (
    <>
      <CardToprating />
    </>
  );
};

export default Toprating;
