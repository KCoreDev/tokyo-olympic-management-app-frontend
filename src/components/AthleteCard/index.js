import React from "react";
import "./index.css";

const Athlete = ({ athlete }) => {
  return (
    <div className='olympic_hompage-container_athlete'>
      <div className='olympic_hompage-container_athlete-image'>
        <img src={athlete.athleteImage.data} alt='service_image' />
      </div>
      <div className='olympic_hompage-container_athlete-content'>
        <h2>{athlete.firstName}</h2>
        <p>{athlete.lastName}</p>
        <p>{athlete.country}</p>
        <p>{athlete.dateOfBirth}</p>
        <p>{athlete.gender}</p>
      </div>
      <div className='olympic_hompage-container_athlete-table'>
        <tr>
          <th>Events</th>
          <th>Results</th>
        </tr>
        {          
          athlete.events.map(event => {
            const { name, result } = event;
            return (
              <tr>
                <td>{name}</td>
                <td>{result.name}</td>
              </tr>
            )
          })
        }
      </div>
    </div>
  );
};

export default Athlete;
