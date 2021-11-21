import React, { useEffect, useState } from "react";
import "./index.css";
import Athlete from "../../components/AthleteCard";
import Header from "../../components/Header";
import Search from "../../components/Search";
import axios from "axios";

const Homepage = () => {
  const [athletes, setAthletes] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    //Retrive all athletes
    axios.get(`/api/v1/athletes/`).then(response => {
      const { data } = response.data;
      console.log(data);
      setAthletes(data);
    }).catch(error => {
      console.error("Error", error);
      setError(error);
    })
  },[])

  return (
    <>
      <Header />
      <Search />
      <div className='olympics_homepage section_margin section__padding'>
        <div className='olympics_homepage_athletecard-container'>
          <div className='olympics_homepage_athletecard-container-display'>
            {athletes && athletes.map && athletes.map((athlete) => (
              <Athlete athlete={athlete} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
