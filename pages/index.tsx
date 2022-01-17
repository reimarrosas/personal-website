import type { GetStaticProps, NextPage } from "next";

import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Highlighted from "../components/Projects/Highlighted";
import { Project, ProjectProps } from "../components/Projects/types";
import { supabase } from "../utils/supabase";

const Home: NextPage<ProjectProps> = ({ projectList }) => {
  return (
    <>
      <div id="home"></div>
      <Header isIndex renderNav />
      <Hero />
      <Highlighted projectList={projectList} />
      <Contact />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const res = await supabase
    .from<Project>("projects")
    .select()
    .eq("is_highlighted", true);

  return {
    props: {
      projectList: res.data,
    },
  };
};

export default Home;
