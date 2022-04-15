import { useState } from 'react';
import FormComponents from '../components/Form';
import StopWatch from '../components/StopWatch';
import TaskList from '../components/TaskList';
import { ITasks } from '../types/ITasks';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [selected, setSelected] = useState<ITasks>();

  function selectTask(selectedTask: ITasks){
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishTask(){
    if(selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id){
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <FormComponents setTasks={setTasks}/>
      <TaskList tasks={tasks} selectTask={selectTask}/>
      <StopWatch selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
