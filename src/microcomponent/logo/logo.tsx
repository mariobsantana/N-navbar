import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/material";
import { FC } from "react";
import { themeSizes } from "../../types/customs";

export interface LogoProps {
  size?: themeSizes;
  img?: string;
  "data-testid"?: string;
}

export const MainLogo: FC<LogoProps> = ({size, img}) => {
  const props = {
    "data-testid": "mainLogo",
    src: img,
    size
  }
  return (
      <MainImage {...props}/>
  );
};

interface StyledAvatarProps {
  size?: themeSizes;
}

const MainImage = styled("img")<StyledAvatarProps>(({ size, theme }) => ({
    width: "8rem",
    height: "auto",
  ...(size === "small" && {
    width: "4rem",
    height: "auto"
  }),
  ...(size === "medium" && {
    width: "8rem",
    height: "auto"
  }),
  ...(size === "large" && {
    width:"12rem",
    height:"auto"
  }),
}));

