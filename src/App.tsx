import Appbar from "./microcomponent/Appbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {Dates} from "./microcomponent/displayDate/displayDate";

export interface AppProps {
  dates ?: Dates ;
  navSwitch?: boolean
  setNavSwitch?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function App({dates, navSwitch, setNavSwitch}: AppProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // console.log("fechas desde el contenedor", dates);
  return (
    <div>
      <Appbar matchesSM={matches} setNavSwitch={setNavSwitch}/>
    </div>
  );
}