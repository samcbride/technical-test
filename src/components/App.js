import React, { useState, useEffect } from "react";
import "../styles/App.css";
import AccountNumber from "./AccountNumberForm";
import ChannelPortfolio from "./ChannelPortfolio";
import PropTypes from "prop-types";
import ChannelSubscriptions from "./ChannelSubscriptions";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(async (res) => {
      if (res.status !== 200) {
        setData("uh oh error!");
      }
      const data = await res.json();
      setData(data);
    });
  }, [setData, url]);

  return [data];
};

function App({ eligibility }) {
  const [accountNumber] = useFetch("/user/sample");

  return (
    <div className="App">
      <p className="rewards-service">Rewards Service</p>
      <p className="eligibility">Find out if you are eligible!</p>
      <AccountNumber />
      <ChannelPortfolio />
      <ChannelSubscriptions eligibility={eligibility} />
      <div>User data: {JSON.stringify(accountNumber)}</div>
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
      }).isOptional,
    })
  ),
};
