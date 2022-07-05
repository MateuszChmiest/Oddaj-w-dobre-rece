import React from "react";
import { Element } from "react-scroll";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";

const Home = () => {
	return (
		<>
			<Element name='HomeHeader'>
				<HomeHeader />
			</Element>
			<Element name="HomeThreeColumns">
      <HomeThreeColumns />
      </Element>
			<Element name="HomeSimpleSteps">
        <HomeSimpleSteps/>
      </Element>
			<Element name="HomeAboutUs">
        <HomeAboutUs/>
      </Element>
			<Element name="HomeWhoWeHelp">
        <HomeWhoWeHelp/>
      </Element>
			<Element name="HomeContact">
        <HomeContact/>
      </Element>
		</>
	);
};

export default Home;
