/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import FadeTransitionRouter from "app/components/FadeTransitionRouter";
import Loadable from "react-loadable";
import About from "app/routes/about/components/About";
import { Route } from "react-router-dom";

// Example of code splitting on a route
const LoadableDashboard = Loadable({
  loader: () => import("app/routes/dashboard/components/Dashboard"),
  loading() {
    return <h1>Loading Dashboard...</h1>;
  }
});

const layoutClass = css`
  margin-top: 50px;
`;

const PrivateContent = () => (
  <div css={layoutClass}>
    <FadeTransitionRouter>
      <Route path="/" exact component={LoadableDashboard} />
      <Route path="/about" component={About} />
    </FadeTransitionRouter>
  </div>
);

export default PrivateContent;
