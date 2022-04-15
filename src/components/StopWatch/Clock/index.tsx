import style from "./Clock.module.scss";

interface Props {
    time: number | undefined
}

export default function Clock({time = 0}: Props){

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDez, minuteUni] = String(minutes).padStart(2, '0');
    const [secondDez, secondUni] = String(seconds).padStart(2, '0');
    return(
        <>
            <span className={style.ClockNumber}>{minuteDez}</span>
            <span className={style.ClockNumber}>{minuteUni}</span>
            <span className={style.ClockDivision}>:</span>
            <span className={style.ClockNumber}>{secondDez}</span>
            <span className={style.ClockNumber}>{secondUni}</span>
        </>
    );
}