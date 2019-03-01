/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors } from "common/lib/colors";

const errorClass = css`
  background-color: ${colors.alertErrorBackground};
  color: ${colors.alertErrorText};
  width: 500px;
`;

const successClass = css`
  background-color: ${colors.alertSuccessBackground};
  color: ${colors.alertSuccessText};
  width: 500px;
`;

const Alert = ({ dismissable = true, onDismiss, alertType, children }) => {
  let alertClass;

  switch (alertType) {
    case "error":
      alertClass = errorClass;
      break;
    case "success":
      alertClass = successClass;
      break;
    default:
      alertClass = errorClass;
  }

  return (
    <div className="notification" css={alertClass}>
      {dismissable && <button className="delete" onClick={onDismiss} />}
      <div className="has-text-centered">{children}</div>
    </div>
  );
};

export default Alert;
