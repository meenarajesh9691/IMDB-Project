import { useEffect } from "react";
import { useContext } from "react";
import { tvhomeContext } from "@/context/Contexttvhome";
import axios from "axios";
import Link from "next/link";

const Tvhome = () => {
  const [airshow, setAirshow] = useContext(tvhomeContext);
  // console.log(airshow);

  const GetAirTv = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=044a9003a4a127dec6cc7e70ddabce4c&language=en-US&page=1`
    );

    setAirshow(data.results);
    // console.log(data);
  };

  useEffect(() => {
    GetAirTv();
  }, []);

  return (
    <>
      <h2 className="container  alert alert-secondary w-25 mt-5 text-center">
        TvShow List
      </h2>
      <div className="container outer p-5  d-flex mt-5">
        {airshow &&
          airshow.map((m) => (
            <div key={m.id}>
              <Link
                href={`TvShow/TvPopular/${m.id}`}
                className="home__textstyle"
              >
                <div className="card m-2 shadow p-3 mb-5 bg-body-tertiary rounded">
                  <img
                    height={250}
                    src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                  />
                  <h4 className="fs-5 ps-2 py-2">{m.original_name}</h4>
                  <h4 className="fs-5 ps-2 text-secondary ">
                    {m.first_air_date}
                  </h4>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Tvhome;
