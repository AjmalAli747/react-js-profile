import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../Image/error.png";
import "../Css/Error.css";

const Error = () => {
  useEffect(() => {
    document.title = "About Us";
  });
  return (
    <div>
      <section>
        <div className="error">
          <div className="error_row">
            <div className="error_col">
              <img src={ErrorPage} alt={ErrorPage} />
              <h1>page not found</h1>
              <Link to="/">
                <button>
                  <i className="far fa-hand-point-left"></i>Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
