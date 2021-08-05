import React, { useContext, useEffect, useState } from 'react';
import { TaskListContext } from './context/TaskListContext';
const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask, clearTask, editItem, editTask } =
    useContext(TaskListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
    } else {
      editTask(editItem.id, title);
    }
    setTitle('');
  };
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className='task-input'
        placeholder='Add tasks'
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {editItem ? 'Edit' : 'Add'} Task
        </button>
        <button onClick={clearTask} className='btn clear-btn'>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
