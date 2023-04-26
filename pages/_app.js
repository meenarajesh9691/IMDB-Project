import "@/styles/globals.css";
// import Head from "next/head";
// import Script from "next/script";

// import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContextNow from "@/context/Contextnow";
import Context from "@/context/Context";
import Contextupcoming from "@/context/Contextupcoming";
import Contexttoprating from "@/context/Contexttoprating";
import Contexttvpopular from "@/context/Contexttvpopular";
import Contexttvhome from "@/context/Contexttvhome";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Contexttvhome>
        <Contexttvpopular>
          <Contexttoprating>
            <Contextupcoming>
              <ContextNow>
                <Context>
                  <Component {...pageProps} />
                </Context>
              </ContextNow>
            </Contextupcoming>
          </Contexttoprating>
        </Contexttvpopular>
      </Contexttvhome>
    </>
  );
}
