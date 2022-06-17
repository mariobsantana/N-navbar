import Appbar from "./microcomponent/Appbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Dates } from "./microcomponent/displayDate/displayDate";

export interface AppProps {
  navSwitch?: boolean;
  setNavSwitch?: React.Dispatch<React.SetStateAction<boolean>>;
  prevMonth: () => void;
  nextMonth: () => void;
  resetDate: () => void;
  dates: number;
  // dates: Dates;
}

export default function App({
  navSwitch,
  setNavSwitch,
  prevMonth,
  nextMonth,
  resetDate,
  dates,
}: AppProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Appbar
        matchesSM={matches}
        setNavSwitch={setNavSwitch}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        resetDate={resetDate}
        dates={dates}
      />
    </div>
  );
}
