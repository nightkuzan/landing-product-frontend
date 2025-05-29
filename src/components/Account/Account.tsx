import React from "react";

// Extracted text content to constants for easier maintenance
const ACCOUNT_TITLE = "CREATE YOUR PROFESSIONAL ACCOUNT";
const ACCOUNT_SUBTITLE = "UNLOCK ACCESS TO LATEST COLLECTIONS";
const ACCOUNT_DESCRIPTION =
  "Create an account to explore our comprehensive product catalog, " +
  "complete with high-quality images, detailed specifications, and " +
  "pricing information. Enjoy direct access to our sales team for any " +
  "questions or order inquiries—everything you need, right at your " +
  "fingertips.";

const Account: React.FC = () => {
  return (
    <section className="account-section">
      <div className="container">
        <h2 className="account-title">{ACCOUNT_TITLE}</h2>
        <p className="account-subtitle">{ACCOUNT_SUBTITLE}</p>

        <div className="account-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>

        <p className="account-desc">{ACCOUNT_DESCRIPTION}</p>

        <div className="account-buttons">
          <button className="btn btn-primary">PLEASE REGISTER</button>
          <button className="btn btn-primary">PLAN A CALL</button>
        </div>
      </div>
    </section>
  );
};

export default Account;
