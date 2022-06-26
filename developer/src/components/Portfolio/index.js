import React from 'react';
import datingApp from "../../assets/images/I++.png";
import mindingCoins from "../../assets/images/mindingcoins.png";
import noSQL from "../../assets/images/noSQL.png";


function Portfolio() {
    return (
      <section>
        <h1 data-testid="h1tag">Portfolio</h1>
   
        <a href="https://github.com/sdavis525/MindingCoins">
            <img
                src={mindingCoins}
                alt="budget-tracker"
                className="screenshot"
            />
        </a>
        <a href="https://github.com/sdavis525/messageMe">
            <img
                src={noSQL}
                alt="messageMe"
                className="screenshot"
            />
        </a>
        <a href="https://peaceful-beach-75980.herokuapp.com/">
            <img
                src={datingApp}
                alt="i++"
                className="screenshot"
            />
        </a>
      </section>
    );
  }

export default Portfolio;