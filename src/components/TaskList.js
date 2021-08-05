import { useContext } from 'react';
import { TaskListContext } from './context/TaskListContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul className='list'></ul>
      {tasks.map((task) => (
        <Task title={task.title} id={task.id} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
