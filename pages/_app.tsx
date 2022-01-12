import "../styles/globals.css";
import type { AppProps } from "next/app";
import CustomHead from "../components/Head";
import LoginProvider from "../context/LoginProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomHead />
      <LoginProvider>
        <Component {...pageProps} />
      </LoginProvider>
    </>
  );
}

export default MyApp;
