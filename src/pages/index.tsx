import type { NextPage } from "next";
import { Layout } from "../layout/default";
import { Waves, DotSeparator } from "../components/minimal";
import { AboutMe, Hero, Skills, Projects } from "../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStorageConfig } from "@/app/states";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorageConfig());
  }, []);

  return (
    <Layout title="Manuel Fajardo">
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
