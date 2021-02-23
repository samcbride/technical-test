import React from "react";
import IndividualAccounts from "./IndividualAccounts";
import PropTypes from "prop-types";

const ChannelSubscriptions = ({ eligibility }) => (
  <div className="channel-subscriptions">
    {eligibility.map((eligible) => (
      <IndividualAccounts
        key={eligible.accountNumber}
        accountNumber={eligible.accountNumber}
        sports={eligible.channelSubscriptions.sports}
        kids={eligible.channelSubscriptions.kids}
        music={eligible.channelSubscriptions.music}
        news={eligible.channelSubscriptions.news}
        movies={eligible.channelSubscriptions.movies}
      />
    ))}
  </div>
);

export default ChannelSubscriptions;

ChannelSubscriptions.propTypes = {
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
  ).isRequired,
};
