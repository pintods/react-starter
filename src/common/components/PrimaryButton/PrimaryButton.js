/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors } from "common/lib/colors";

const buttonClass = css`
  color: ${colors.primaryButtonText};
  font-weight: bold;
  background-color: ${colors.primaryButtonBackground};
  &:hover {
    color: ${colors.primaryButtonText};
    border: 1px solid black;
  }
`;

const PrimaryButton = ({ onClick, type = "text", children }) => {
  return (
    <button className="button" css={buttonClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
