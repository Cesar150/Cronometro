import { ITasks } from '../../../types/ITasks';
import style from './Item.module.scss';

interface props extends ITasks {
    selectTask: (selectedTask: ITasks) => void
}

export default function Item({ task, time, selected, completed, id, selectTask }: props) {

    return (
        <li className={`${style.item} ${selected ? style.itemSelected : ''} 
                        ${completed ? style.itemCompleted : ''}`
        }
            onClick={() => !completed && selectTask({
                task,
                time,
                selected,
                completed,
                id
            })}>
            <h3> {task} </h3>
            <span> {time} </span>
            {completed && <span className={style.concluded} aria-label="Tarefa Completada"></span>}
        </li>
    );
}