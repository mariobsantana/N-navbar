import { FC } from "react";
import { OptionA } from "./OptionA";
import { OptionB } from "./OptionB";
import ButtonGroup from '@mui/material/ButtonGroup';
import { themeColors, themeSizes } from "../../types/customs";
export interface SwitchProps {
  "data-testid"?: string;
  size?: themeSizes;
  color?: themeColors;
}

export const SwitchButton: FC<SwitchProps> = ({
  size,
  color,
}) => {
  const props = {
    "data-testid": "SwitchButton",
    size,
    color: color,
  };
  return (
    <ButtonGroup>
      <OptionA color={color} size={size} onClick={() => {
          console.log("Week was clicked!");}}
          >Week</OptionA>
      <OptionB color={color} size={size} onClick={() => {
          console.log("Month was clicked!");}}
          >Month</OptionB>
    </ButtonGroup>
  );
};
