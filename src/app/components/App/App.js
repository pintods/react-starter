/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { AuthContext } from "app/context/AuthContext";
import { AlertContext } from "app/context/AlertContext";
import Nav from "app/components/Nav";
import Login from "app/components/Login";
import Alert from "app/components/Alert";
import useAuth from "app/hooks/useAuth";
import useAlert from "app/hooks/useAlert";
import { getToken } from "common/effects/api/auth";
import PrivateContent from "app/routes/components/PrivateContent";
import { BrowserRouter as Router } from "react-router-dom";

const alertClass = css`
  height: 50px;
`;

const App = () => {
  const authState = useAuth();
  const alertState = useAlert();

  const handleLogin = async data => {
    const tokenResult = await getToken(data.username, data.password);
    if (tokenResult.hasOwnProperty("error")) {
      alertState.addAlert(tokenResult.error);
      return;
    }
    authState.setAuth({ authStatus: true, token: tokenResult.token });
  };

  const handleLogout = e => {
    e.preventDefault();
    authState.clearAuth();
  };

  const handleAlertDismiss = () => {
    alertState.clearAlert();
  };

  return (
    <Router>
      <AuthContext.Provider value={authState}>
        <Nav authStatus={authState.authStatus} onLogout={handleLogout} />
        <AlertContext.Provider value={alertState}>
          <div className="section">
            <div className="container">
              <div className="columns is-centered" css={alertClass}>
                {alertState.alertMessage && (
                  <Alert
                    dissmissble={true}
                    onDismiss={handleAlertDismiss}
                    alertType={alertState.alertType}
                  >
                    {alertState.alertMessage}
                  </Alert>
                )}
              </div>
            </div>
            {/*
            PrivateContent is used to preventing bloating App
          */}
            {authState.authStatus ? (
              <PrivateContent />
            ) : (
              <Login path="/" onLogin={handleLogin} />
            )}
          </div>
        </AlertContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
