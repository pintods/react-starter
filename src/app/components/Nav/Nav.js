/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LightButton from "common/components/LightButton";
import { APP_NAME } from "common/lib/constants";
import NavMenu from "app/components/NavMenu";
import { useState } from "react";

const logoClass = css`
  font-weight: bold;
  font-size: 2em;
  color: #ee7000;
`;

const burgerButtonClass = css`
  outline: none;
  border: 0;
`;

const Nav = ({ authStatus, onLogout }) => {
  const [isNavExpanded, setNavExpanded] = useState(false);

  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="http://localhost:1234">
          <span css={logoClass}>{APP_NAME}</span>
        </a>
        {authStatus && (
          <button
            css={burgerButtonClass}
            className={
              "navbar-burger burger is-white" +
              (isNavExpanded ? " is-active" : "")
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={() => setNavExpanded(!isNavExpanded)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        )}
      </div>
      {authStatus && <NavMenu isExpanded={isNavExpanded} />}
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {authStatus === true && (
              <LightButton onClick={onLogout}>Log Out</LightButton>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
