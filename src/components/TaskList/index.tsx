import { ITasks } from "../../types/ITasks";
import Item from "./Item/Item";
import style from './TaskList.module.scss';

interface props{
    tasks: ITasks[],
    selectTask: (selectedTask: ITasks) => void
}

function TaskList({tasks, selectTask}: props) {
    return (
        <aside className={style.TaskList}>
            <h2> Estudos do dia</h2>
            <ul>
                {tasks.map((item)=>(
                   <Item 
                      selectTask={selectTask}
                      key={item.id}
                      {...item}
                   />
                ))}
            </ul>
        </aside>
    );
}

export default TaskList;