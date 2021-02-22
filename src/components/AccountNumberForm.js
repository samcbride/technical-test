import React from "react";
import "../styles/AccountNumberForm.css";

const AccountNumber = () => {
  return (
    <form>
      <div className="account-number">
        <input
          className="account-number-area"
          type="text"
          placeholder="Enter account number"
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AccountNumber;
