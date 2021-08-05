import { useContext } from 'react';
import { TaskListContext } from './context/TaskListContext';

const Task = ({ title, id }) => {
  const { removeTask, findTask } = useContext(TaskListContext);
  return (
    <li className='list-item'>
      <span>{title}</span>
      <div>
        <button
          onClick={() => {
            removeTask(id);
          }}
          className='btn-delete task-btn'
        >
          <i className='fas fa-trash-alt'></i>
        </button>
        <button
          onClick={() => {
            findTask(id);
          }}
          className='btn-edit task-btn'
        >
          <i className='fas fa-pen'></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
