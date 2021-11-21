import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Search = () => {
  return (
    <div className='search_container navbar'>
      <div className='search_container-parameters'>
        <div className='search_container-parameters-name'>
          <input type='text' placeholder='Enter Name' />
        </div>
        <div className='search_container-parameters-country'>
          <input type='text' placeholder='Enter country' />
        </div>
      </div>

      <div className='search_container-buttons'>
        <div className='search_conrainer-buttons-btn'>
          <Link to='/single-athlete'>
            <button>Search</button>
          </Link>
          <button>Clear</button>
          <Link to='/create-athlete'>
            <button>New</button>
          </Link>
        </div>

        <div className='search_container-selector'>
          <select className='gender'>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <select className='events'>
            <option value='male'>100m</option>
            <option value='female'>200m</option>
            <option value='female'>High Jump</option>
            <option value='female'>Long Jump</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
