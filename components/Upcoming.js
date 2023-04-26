import { useEffect } from "react";
import { useContext } from "react";
import { upcomingContext } from "@/context/Contextupcoming";
import axios from "axios";
import CardUpcoming from "./Card/CardUpcoming";

const Upcoming = () => {
  const [upcoming, setUpcoming] = useContext(upcomingContext);

  // console.log(upcoming);

  const GetUpcomingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US&page=1`
    );

    setUpcoming(data.results);
    // console.log(data);
  };

  useEffect(() => {
    GetUpcomingMovies();
  }, []);

  return (
    <>
      <CardUpcoming />
    </>
  );
};

export default Upcoming;
