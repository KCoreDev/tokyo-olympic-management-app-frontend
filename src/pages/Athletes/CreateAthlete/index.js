import React from "react";
import AthleteForm from "../../../components/AthleteForm";

const CreateAthlete = (props) => {
  return (
    <div className='section__margin'>
      <div className='row'>
        <div className='col-md-5'>
          <AthleteForm props />
        </div>
      </div>
    </div>
  );
};

export default CreateAthlete;
