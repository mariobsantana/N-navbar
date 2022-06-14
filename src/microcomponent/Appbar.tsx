import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { PopoverPopupState } from "./displayhrs/DisplayHrs";
import { TodayButton } from "./todayButton/todayButton";
import { DisplayDate } from "./displayDate/displayDate";
import MainDrawer from "./Drawer/Drawer";
import { ArrowsButtons } from "./ArrowsNav/Arrows";
import { FC, useCallback, useEffect, useState } from "react";
import { hrsT } from "../data/hours";
import { dates } from "../data/dates";
import { ImageAvatars } from "./profile/Profile";
import { MainLogo } from "./logo/logo";
import { Grid } from "@mui/material";
import { SwitchButton } from "./Switch/Switch";
import { Observable } from 'windowed-observable';

export interface AppbarProps {
  matchesSM: boolean;
  navSwitch?: boolean;
  setNavSwitch?:React.Dispatch<React.SetStateAction<boolean>>
}

const observable = new Observable("messages");
const datesObservable = new Observable("dates");


const ResponsiveAppBar: FC<AppbarProps> = ({ matchesSM, setNavSwitch }) => {
  const [messages, setMessages] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [calendarData, setCalendarData]= useState({})

  let newPrev

  // const handleNewMessage = (newMessage: any) => {
  //   setMessages((currentMessages) => currentMessages.concat(newMessage));
  // };

  const handleNewMessage = useCallback((newMessage: any) => {
    setMessages((currentMessages) => currentMessages.concat(newMessage));
  },[]);

  const handleNewCalendar = useCallback((dates: any) => {
    setCalendarData(dates);
    console.log('1---', dates)
    // setPrevious(dates.prevMonth);
  },[]); 

  useEffect(() => {
    observable.subscribe(handleNewMessage);
   datesObservable.subscribe((dates)=>{
    console.log('1--month func: ', dates.prevMonth);
    newPrev= dates.prevMonth
   });

    return () => {
      observable.unsubscribe(handleNewMessage);
    };
  }, [handleNewMessage,handleNewCalendar]);

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Grid
          container
          spacing={2}
          alignItems="center"
          mx={2}
          justifyContent="space-between"
        >
          <Grid item>
            <MainLogo img="https://res.cloudinary.com/joeutd/image/upload/v1651004286/js-academy/itexico_s1mdee.png" />
          </Grid>

          {matchesSM ? (
            <Grid item>
              <MainDrawer />
            </Grid>
          ) : (
            <>
              <Grid item>
                {/* <TodayButton
                  onClick={() => {
                    console.log("Today button was clicked!");
                  }}
                >
                  Today
                </TodayButton> */}
                                <div className="MF">
                  <h3>Microfrontend 1️⃣</h3>
                  <p>New messages will be displayed below 👇</p>
                  <div className="MF__messages">
                    {messages.map((something, i) => (
                      <p key={something + i}>{something}</p>
                    ))}
                  </div>
                </div>

              </Grid>

              <Grid item>
                {previous ? 
                <ArrowsButtons
                  prevMonth={()=>console.log("s", previous)}
                  nextMonth={()=>console.log("s" , previous)}
                  size="small"
                  color="inherit"
                /> : null}
              </Grid>

              <Grid item sx={{ flexGrow: 1 }}>
                <DisplayDate dates={dates} data-testid={"displayDate"} />
              </Grid>

              <Grid item mx={1}>
                <PopoverPopupState  hours={hrsT} />
              </Grid>

              <Grid item>
                <SwitchButton setNavSwitch={setNavSwitch} />
              </Grid>

              <Grid item>
                <ImageAvatars name="DL" />
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
