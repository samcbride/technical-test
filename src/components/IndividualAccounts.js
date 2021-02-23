import React from "react";
import PropTypes from "prop-types";

const IndividualAccounts = (props) => {
  const { sports, kids, music, news, movies } = props;
  return (
    <div className="individual-channels" data-testid="individual-channels">
      <div className="individual-channels__sports">{sports}</div>
      <div className="individual-channels__kids">{kids}</div>
      <div className="individual-channels__music">{music}</div>
      <div className="individual-channels__news">{news}</div>
      <div className="individual-channels__movies">{movies}</div>
    </div>
  );
};

export default IndividualAccounts;

IndividualAccounts.propTypes = {
  sports: PropTypes.string,
  kids: PropTypes.string,
  music: PropTypes.string,
  news: PropTypes.string,
  movies: PropTypes.string,
};
