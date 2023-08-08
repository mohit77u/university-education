import React from "react";
import { conferences, publications } from "../utils/constants";

const Publication = () => {
  return (
    <div className="publications-wrapper">
      <div className="container">
        <div className="publications">
          <header>
            <h3>Publications</h3>
            <h6>Journal Articles</h6>
            <p>
              Full information also available at{" "}
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </p>
          </header>
          <div className="publications-content">
            <ul>
              {publications.map((item, index) => (
                <li key={index} className="publications-list">
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>

          <header>
            <h6>Referred Conference Papers</h6>
          </header>
          <div className="publications-content">
            <ul>
              {conferences.map((item, index) => (
                <li key={index} className="publications-list">
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
