import React, { useState, useEffect } from "react";
import "../styles/App.css";
import AccountNumber from "./AccountNumberForm";
import ChannelPortfolio from "./ChannelPortfolio";
import PropTypes from "prop-types";

function App({ eligibility }) {
  return (
    <div className="App">
      <p className="rewards-service">Rewards Service</p>
      <p className="eligibility">Find out if you are eligible!</p>
      <AccountNumber eligibility={eligibility} />
      <ChannelPortfolio />
    </div>
  );
}

export default App;

App.propTypes = {
  eligibility: PropTypes.arrayOf(
    PropTypes.shape({
      accountNumber: PropTypes.number.isRequired,
      channelSubscriptions: PropTypes.shape({
        sports: PropTypes.string,
        kids: PropTypes.string,
        music: PropTypes.string,
        news: PropTypes.string,
        movies: PropTypes.string,
      }).isRequired,
    })
  ),
};
