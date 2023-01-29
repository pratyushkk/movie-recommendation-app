import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />

      <Row rowID="2" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="1" title="Adventure" fetchURL={requests.requestAdventure} />
      <Row rowID="3" title="Action" fetchURL={requests.requestAction} />
      <Row rowID="4" title="Anime" fetchURL={requests.requestAnime} />
      <Row rowID="5" title="War" fetchURL={requests.requestWar} />
      <Row rowID="6" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="7" title="Upcoming" fetchURL={requests.requestUpcoming} />
    </>
  );
};

export default Home;
