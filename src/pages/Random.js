import React, { useState } from "react";

import "../styles/randomcard.css";

export function FetchAPI() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("/randomimages.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      let random = Math.floor(Math.random() * json.length);
      setData(json[random]);
    })
    .catch((error) => {
      console.error("Error fetching the API:", error);
    });
  
 };


  return (
    <div>
      <h1 className="banner">Insight InTo Your Inner Being</h1>

      <div id="container" className="container">
        <div className="inner" key={data.id}>
          <img className="card" id="image_shower" src={data.card} alt="cards" />
          
        </div> 
        <div className="name">{data.name}</div>
          <div className="info">{data.info}</div> 
          <button  className="btn" onClick={apiGet}>
            Card of The Day
          </button>
          <div className="statementBanner">
          <h1 className="statement">Only The First Card Counts.</h1>
        </div>
      </div>
    </div>
  );
}
