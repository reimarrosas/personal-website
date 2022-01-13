import type { GetStaticProps, NextPage } from "next";

import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Highlighted, {
  HighlightedProps,
  Project,
} from "../components/Projects/Highlighted";
import { supabase } from "../utils/supabase";

const Home: NextPage<HighlightedProps> = ({ projectList }) => {
  return (
    <>
      <div id="home"></div>
      <Header isIndex renderNav />
      <Hero />
      <Highlighted projectList={projectList} />
      <Contact />
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
