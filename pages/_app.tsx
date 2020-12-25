import "../styles/globals.css";
import "react-animated-slider/build/horizontal.css";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
