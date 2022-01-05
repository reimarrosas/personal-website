import type { NextPage } from "next";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <div id="home"></div>
      <Header />
      <Hero />
      <Contact />
    </>
  );
};

export default Home;
