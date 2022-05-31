import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/material";
import { FC } from "react";

type themeColors = "primary" | "secondary" | "default";

export interface ProfileProps {
  color?: themeColors;
  img?: string;
  name: React.ReactElement | string;
}

export const ImageAvatars: FC<ProfileProps> = ({color, img, name}) => {
  const props = {
    src: img,
    color
  }
  return (
    <MainStack direction="row" spacing={2}>
      <MainAvatar {...props}>{name}</MainAvatar>
    </MainStack>
  );
};

interface StyledAvatarProps {
  color?: themeColors;
}

const MainAvatar = styled(Avatar)<StyledAvatarProps>(({ color, theme }) => ({
  backgroundColor: grey[50],
  color: blue[700],
  ...(color === "primary" && {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  }),
  ...(color === "secondary" && {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  }),
  ...(color === "default" && {
    backgroundColor: grey[50],
    color: blue[700],
  }),
}));

const MainStack = styled(Stack)(({ theme }) => ({
  height: "auto",
  display: "flex",
  fontSize: "1.5em",
  fontWeight: "bolder",
  marginLeft: "1rem",
  marginRight: "1rem",
  borderRadius: "30rem",
}));



