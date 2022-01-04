import "../styles/globals.css";
import type { AppProps } from "next/app";
import CustomHead from "../components/Head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
