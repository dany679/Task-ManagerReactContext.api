import { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [editItem, setEditItem] = useState(null);
  const [tasks, setTasks] = useState(initialState);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };
  const clearTask = (id) => {
    setTasks([]);
  };
  const findTask = (id) => {
    const item = tasks.find((tasks) => tasks.id === id);
    setEditItem(item);
    console.log(item, 'item');
  };
  const editTask = (id, title) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task,
    );
    setTasks(newTasks);
    setEditItem(null);
  };
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearTask,
        findTask,
        editTask,
        editItem,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
