/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PrimaryButton from "common/components/PrimaryButton";
import { formToJson } from "common/lib/forms";

const containerClass = css`
  max-width: 500px;
`;

const Login = ({ onLogin }) => {
  const handleOnSubmit = e => {
    e.preventDefault();
    onLogin(formToJson(e, "LoginForm"));
  };

  return (
    <div className="hero is-medium">
      <div className="hero-body">
        <div className="container" css={containerClass}>
          <form id="LoginForm" onSubmit={handleOnSubmit}>
            <div className="field">
              <label htmlFor="username" className="label">
                Username
              </label>
              <div className="control">
                <input
                  name="username"
                  className="input"
                  type="email"
                  required
                  placeholder="Enter your username..."
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="control">
                <input
                  name="password"
                  className="input"
                  type="password"
                  required
                  placeholder="Enter your password..."
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <PrimaryButton type="submit">Login</PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
