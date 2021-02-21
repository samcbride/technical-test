import React from "react";
import PropTypes from "prop-types";

const IndividualAccounts = (props) => {
  const { sports, kids, music, news, movies } = props;
  return (
    <div className="individual-channels">
      {/* <div className="individual-channels__accountNumber">{accountNumber}</div> */}
      <div className="individual-channels__sports">{sports}</div>
      <div className="individual-channels__kidss">{kids}</div>
      <div className="individual-channels__music">{music}</div>
      <div className="individual-channels__news">{news}</div>
      <div className="individual-channels__movies">{movies}</div>
    </div>
  );
};

export default IndividualAccounts;

IndividualAccounts.propTypes = {
  //   accountNumber: PropTypes.number.isRequired,
  sports: PropTypes.string.isRequired,
  kids: PropTypes.string.isRequired,
  music: PropTypes.string.isRequired,
  news: PropTypes.string.isRequired,
  movies: PropTypes.string.isRequired,
};
