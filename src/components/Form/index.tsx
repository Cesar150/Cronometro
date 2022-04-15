import React, { useState } from "react";
import { ITasks } from "../../types/ITasks";
import ButtonComponent from "../Button";
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

function FormComponents({setTasks}: Props){
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setTasks(oldTask => 
            [
                ...oldTask, 
                { 
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]);
        setTask("");
        setTime("00:00");
    }

    return (
        <form className={style.newTask} onSubmit={addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicione um novo estudo.
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={task}
                        onChange={event => setTask(event.target.value)}
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="timeCounter">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="timeCounter"
                        id="timeCounter"
                        value={time}
                        onChange={event => setTime(event.target.value)}
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <ButtonComponent type={"submit"}>
                    Adicionar
                </ButtonComponent>
            </form>
    );
}

export default FormComponents;