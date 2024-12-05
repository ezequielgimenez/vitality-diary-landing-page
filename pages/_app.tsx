// pages/_app.tsx
import "./styles/global.css";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
