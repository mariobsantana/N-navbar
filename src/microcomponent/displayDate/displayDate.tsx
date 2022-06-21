import { FC } from "react";
import { useTheme, styled } from "@mui/material";
import { themeColors } from "../../types/customs";


// export interface Dates {
//   startDate: Date;
//   endDate: Date;
// }
export interface DatesProps extends DisplayProps {
  dates: number[];
  date2?:number[];
  "data-testid": string;
}

interface DisplayProps {
  color?: themeColors;
}

export const DisplayDate: FC<DatesProps> = ({ dates, date2 = dates, color }) => {
  const props = {
    "data-testid": "displayDate",
    color,
  };
  const theme = useTheme();

  const { startDate, endDate } = {
    startDate: new Date(
      `${dates[0]}-${dates[1]+1}-${dates[2]}`
    ),
    endDate: new Date(
      `${date2[0]}-${date2[1]+1}-${date2[2]}`
    ),
  };
  console.log("Karly Nasabi", `${dates[0]}-${dates[1]+1}-${dates[2]}`)

  const colors: { [key in themeColors]: string } = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    default: "#fff",
  };

  const StyledDiv = styled("div") <DisplayProps>`
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;

    line-height: normal;
    letter-spacing: -0.3px;

    font-family: Work-Sans, sans-serif;

    color: ${({ color = "default" }) => colors[color as themeColors]};
  `;

  const weekHeaderDate =
    `${startDate.toLocaleString("en-US", { month: "short" })}` === `${endDate.toLocaleString("en-US", { month: "short" })}`
      ? `${startDate.toLocaleString("en-US", { month: "short" })} ${startDate.getFullYear()} `
      : `${startDate.toLocaleString("en-US", { month: "short" })} - ${endDate.toLocaleString("en-US", { month: "short" })} ${endDate.getFullYear()}`;

  return <StyledDiv {...props}>{weekHeaderDate}</StyledDiv>;
}