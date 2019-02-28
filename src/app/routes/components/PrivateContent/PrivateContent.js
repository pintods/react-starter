/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import FadeTransitionRouter from "app/components/FadeTransitionRouter";
import Loadable from "react-loadable";
import About from "app/routes/about/components/About";

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
      <LoadableDashboard path="/" />
      <About path="about" />
    </FadeTransitionRouter>
  </div>
);

export default PrivateContent;
