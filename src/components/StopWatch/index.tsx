import { useEffect, useState } from "react";
import { timeToSecond } from "../../common/utils/date";
import { ITasks } from "../../types/ITasks";
import ButtonComponent from "../Button";
import Clock from "./Clock";
import style from "./StopWatch.module.scss";

interface props {
    selected: ITasks | undefined,
    finishTask: () => void
}

export default function StopWatch({selected, finishTask}: props){
    const [time, setTime] = useState<number>();

    useEffect(()=>{
        if(selected?.time){
            setTime(timeToSecond(selected.time))
        }
    },[selected])

    function regressiveTime(count: number = 0){
        setTimeout(()=>{
            if(count > 0){
                setTime(count - 1);
                return regressiveTime(count - 1);
            }
            finishTask();
        }, 1000)
    }
   
    return(
        <div className={style.stopwatch}>
            <p className={style.tittle}>Escolha um card e inicie um cronômetro</p>
            <div className={style.clockWrapper}>
               <Clock time={time} />
            </div>
            <ButtonComponent onClick={(()=>{regressiveTime(time)})}>
                Começar!
            </ButtonComponent>
        </div>
    );
}