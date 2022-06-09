import { FC } from "react";
import { OptionA } from "./OptionA";
import { OptionB } from "./OptionB";
import ButtonGroup from '@mui/material/ButtonGroup';
import { themeColors, themeSizes } from "../../types/customs";
export interface SwitchProps {
  "data-testid"?: string;
  size?: themeSizes;
  color?: themeColors;
  setNavSwitch?:React.Dispatch<React.SetStateAction<boolean>>
}

export const SwitchButton: FC<SwitchProps> = ({
  size,
  color,
  setNavSwitch
}) => {


  const handleOptionA=()=>{
    if(setNavSwitch){
    setNavSwitch(false)
    }
  }

  const handleOptionB=()=>{
    if(setNavSwitch){
   setNavSwitch(true)
    }
  
  }

  return (
    <ButtonGroup>
      <OptionA color={color} size={size} onClick={handleOptionA}
          >Week</OptionA>
      <OptionB color={color} size={size} onClick={handleOptionB}
          >Month</OptionB>
    </ButtonGroup>
  );
};
