import * as React from "react";
import { FC } from "react";
import { styled } from "@mui/material";

type size = "small" | "medium" | "large";
type themeColors = "primary" | "secondary" | "default";

export interface OptionAProps {
  onClick?: () => void;
  "data-testid"?: string;
  size?: size;
  color?: themeColors;
  children?: React.ReactElement | string;
}

export const OptionA: FC<OptionAProps> = ({
  children,
  onClick,
  size,
  color,
}) => {
  const props = {
    onClick,
    "data-testid": "optionA",
    size,
    color: color,
  };
  return (
      <StyledButton {...props}>{children}</StyledButton>
  );
};

interface StyledButtonProps {
  size?: size;
  color?: themeColors;
}

const StyledButton = styled("button")<StyledButtonProps>(
  ({ size = "medium", color, theme }) => ({
    padding: "0.6em 2em",
    borderEndStartRadius: "18px",
    borderTopLeftRadius: "18px",
    color: "#fff",
    cursor: "pointer",
    margin: "0em",
    border: "1px #fff solid",
    backgroundColor: "transparent",
    transition: "translateY 0.3s",
    fontSize: size === "large" ? "1em" : size === "small" ? ".6em" : ".8em",
    "&:focus": {
      outline: "1px solid",
      backgroundColor: "#5398DD",
    },
    "&:hover": {
      transform: `scale(1.02)`,
    },
    ...(color === "primary" && {
      color: theme.palette.primary.main,
      border: `1px ${theme.palette.primary.main} solid`,
    }),
    ...(color === "secondary" && {
      color: "#1976d2",
      border: "1px #1976d2 solid",
      "&:focus": {
        outline: "1px solid",
        backgroundColor: "#E4E3E3",
      },
    }),
    ...(color === "default" && {
      color: "#fff",
      border: `1px #fff solid`,
    }),
  })
);