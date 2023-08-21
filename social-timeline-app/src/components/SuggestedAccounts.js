import React from "react";
import "../styles/SuggestedAccounts.scss";

function SuggestedAccounts({ suggestedAccounts }) {
  return (
    <div className="suggested-accounts">
      <h3>Suggested Accounts</h3>
      <ul className="account-list">
        {suggestedAccounts.map((account) => (
          <li key={account.id} className="account">
            <img src={account.avatar} alt={`Avatar of ${account.author}`} />
            <div className="account-info">
              <h4>{account.author}</h4>
              <p>{account.bio}</p>
              <button>Follow</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestedAccounts;
