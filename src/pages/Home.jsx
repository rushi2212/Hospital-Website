import React from "react";
import HeroSlider from "../components/HeroSlider";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div id="home">
      <HeroSlider />
    </div>
  );
};

export default Home;
