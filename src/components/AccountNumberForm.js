import React from "react";
import "../styles/AccountNumberForm.css";

const AccountNumber = ({ accountNumber }) => {
  console.log(accountNumber);
  return (
    <form>
      <div className="account-number">
        <input
          className="account-number-area"
          type="text"
          placeholder="Enter your account number"
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AccountNumber;
