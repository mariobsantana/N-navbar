import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FC } from "react";
import { Hours } from "../../data/hours";
import { useTheme, styled } from "@mui/material";
import { themeColors } from "../../types/customs";

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export interface HoursProps extends DisplayProps {
  hours: Hours[];
}
interface DisplayProps {
  color?: themeColors;
}

export const PopoverPopupState: FC<HoursProps> = ({ hours, color }) => {
  const props = {
    color,
  };
  const theme = useTheme();

  // Button Properties

  const StyledButton = styled("button")<DisplayProps>(
    ({ color = "default", theme }) => ({
      height: "auto",
      width: "4rem",
      padding: ".3em",
      display: "relative",
      fontSize: "1em",
      borderRadius: "5em",
      cursor: "pointer",
      border: "none",
      ...(color === "primary" && {
        color: theme.palette.primary.main,
        backgroundColor: "#fff",
      }),
      ...(color === "secondary" && {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
      }),
      ...(color === "default" && {
        color: theme.palette.primary.main,
        backgroundColor: "#fff",
      }),
    })
  );

  //First typo properties

  const StyledTypo = styled(Typography)<DisplayProps>(({ color, theme }) => ({
    fontSize: "1em",
    fontWeight: "bold",
    ...(color === "primary" && {
      color: "black",
    }),
    ...(color === "secondary" && {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    }),
    ...(color === "default" && {
      color: "black",
    }),
  }));

  //Hrs typo properties

  const StyledTypoHrs = styled(Typography)<DisplayProps>(
    ({ color = "default", theme }) => ({
      fontSize: "1em",

      ...(color === "primary" && {
        color: theme.palette.primary.main,
        backgroundColor: "#fff",
      }),
      ...(color === "secondary" && {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
      }),
      ...(color === "default" && {
        color: theme.palette.primary.main,
        backgroundColor: "#fff",
      }),
    })
  );

  //Popover properties
  const StyledPop = styled(Popover)<DisplayProps>``;

  //Hours Counter
  const totalHours = hours.reduce((accumulator, obj) => {
    return accumulator + obj.hrs;
  }, 0);

  //Popover content
  // const [anchorEl, setAnchorEl] =
  //   React.useState<HTMLButtonElement | null>(null);

  //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <StyledButton
            {...props}
           
            {...bindTrigger(popupState)}
          >
            {totalHours}
          </StyledButton>
          <StyledPop
            {...props}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            //Popover layout properties
            // id={id}
            // open={open}
            // anchorEl={anchorEl}
            // onClose={handleClose}
            // anchorReference="anchorEl"
            // anchorPosition={{ top: 72, left: 1740,   }}
            // anchorOrigin={{ vertical: "top", horizontal: 1700 }}
            // transformOrigin={{ vertical: "top", horizontal: "right" }}
            transitionDuration={400}
            marginThreshold={75} 
            elevation={5}
          >
            {hours.map((option, index) => (
              <StyledTypo {...props} sx={{ p: 2 }} key={index}>
                {option.name}
                <StyledTypoHrs {...props}>{option.hrs} hrs</StyledTypoHrs>
              </StyledTypo>
            ))}
          </StyledPop>
        </div>
      )}
    </PopupState>
  );
};
