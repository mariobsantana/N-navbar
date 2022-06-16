import Appbar from "./microcomponent/Appbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Dates } from "./microcomponent/displayDate/displayDate";

export interface AppProps {
  dates?: Dates;
  navSwitch?: boolean;
  setNavSwitch?: React.Dispatch<React.SetStateAction<boolean>>;
  prevMonth: () => void;
  nextMonth: () => void;
}

export default function App({
  dates,
  navSwitch,
  setNavSwitch,
  prevMonth,
  nextMonth,
}: AppProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // console.log("fechas desde el contenedor", dates);
  return (
    <div>
      <Appbar
        matchesSM={matches}
        setNavSwitch={setNavSwitch}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
    </div>
  );
}
