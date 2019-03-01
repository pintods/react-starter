/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect, useContext } from "react";
import { getColors } from "common/effects/api/colors";
import { AlertContext } from "app/context/AlertContext";
import { AuthContext } from "app/context/AuthContext";

const containerClass = css`
  margin-top: 100px;
`;

const Dashboard = () => {
  const [colors, setColors] = useState([]);

  const alertState = useContext(AlertContext);
  const authState = useContext(AuthContext);

  useEffect(() => {
    getColors(authState.token).then(colorsResult => {
      if (colorsResult.hasOwnProperty("error")) {
        alertState.addAlert(colorsResult.error);
      } else {
        setColors(colorsResult);
      }
    });
  }, []);

  const colorsList = colors.map(i => <li key={i.id}>{i.color}</li>);

  return (
    <div className="container has-text-centered">
      <h1>This is the dashboard</h1>
      <div css={containerClass}>
        <ul>{colorsList}</ul>
      </div>
    </div>
  );
};

export default Dashboard;
