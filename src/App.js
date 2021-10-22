import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import "./styles/index.scss";
// import { getClipart, getCountryFlagData, filterBadWords } from './utils/utils.js';


const App = () => {
  // useEffect function with the flag API function
  useEffect(() => {

    // For the flags you may be able to use this
    // https://fabian7593.github.io/CountryAPI/

    // fetch("https://country-facts.p.rapidapi.com/all", {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "country-facts.p.rapidapi.com",
    //     "x-rapidapi-key": "fb95cae4c5mshcc1e2ab58d6091dp189153jsne2344d05a8f7",
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // getCountryFlagData();
    // getTranslation();
    // getClipart();
    // filterBadWords();

  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/result" component={ResultPage} />
      </Switch>
      <Footer />
    </>

  );
};

export default App

