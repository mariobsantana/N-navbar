import { useEffect, useState ,FC} from "react";
import { Observable } from 'windowed-observable';
import Appbar from "./Appbar";

const datesObservable = new Observable("dates");

interface ContainerProps{
 matchesSM: boolean;
  navSwitch?: boolean;
  setNavSwitch?:React.Dispatch<React.SetStateAction<boolean>>
}

export const Container:FC<ContainerProps> = ({matchesSM,setNavSwitch}) => {
  const [newNext, setNewNext] = useState(null)
  const [newPrev, setNewPrev] = useState(null)
  
    datesObservable.subscribe((dates)=>{
        console.log(dates)
    });

    console.log("!lkdfsda",newNext, newPrev)

//  useEffect(() => {

//     console.log(newPrevMonth, newNextMonth)
//   }, []);


  return (
    <Appbar matchesSM={matchesSM} setNavSwitch={setNavSwitch}  />
  )
};

