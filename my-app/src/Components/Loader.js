import React from 'react'
import "./loader.scss";
import Loader from "../Images/Loader.txt";

const Loaders = () => {
  return (
      <div className="loaderRow">
        <div className="loaderCol">
          <img  className="loader" alt='' src={Loader} />
        </div>
      </div>
    
  )
}

export default Loaders
