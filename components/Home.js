import { useEffect } from "react";
import { useContext } from "react";
import { nowContext } from "../context/Contextnow";
import axios from "axios";
import CardHome from "./Card/CardHome";

const Home = () => {
  const [now, setNow] = useContext(nowContext);
  // console.log(now);
  const GetNowMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US&page=1`
    );

    setNow(data.results);
    // console.log(data);
  };

  useEffect(() => {
    GetNowMovies();
  }, []);

  return (
    <>
      <CardHome />
    </>
  );
};

export default Home;
