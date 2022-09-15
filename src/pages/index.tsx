import type { NextPage } from "next";
import { Layout } from "../layout/default";
import { Waves, DotSeparator } from "../components/minimal";
import { AboutMe, Hero, Skills, Projects } from "../components";

const Home: NextPage = () => {
  return (
    <Layout title="Next App">
      <Hero />
      <Waves />
      <AboutMe />
      <Skills />
      <Projects />
      <DotSeparator />
    </Layout>
  );
};

export default Home;
