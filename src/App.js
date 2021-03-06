import TaskListContextProvider from './components/context/TaskListContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import './App.css';
function App() {
  return (
    <TaskListContextProvider>
      <div>
        <div className='container'>
          <div className='app-wrapper'>
            <Header />
            <div className='main'>
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
