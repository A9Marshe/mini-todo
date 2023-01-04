import { TasksList } from './components';
import { useReducer, useRef } from 'react';
import { TasksContext } from './context/TasksContext';
import tasksReducer from './hooks/TasksReducer';
import './App.css'

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const headId = useRef(tasks.length);

  return (
    <div className='h-screen flex flex-col space-y-2 ' >
      <header className=' w-full mx-auto text-center p-4' >
        hola
      </header>
      <TasksContext.Provider value={{
        tasks,
        headId,
        dispatch,
      }}>
        <main className=''>
          <TasksList />
        </main>
      </TasksContext.Provider>
      <footer className=' w-full  mx-auto text-center p-4'>
        © 2023 lorem ipusm
      </footer>
    </div>
  );
}

const initialTasks = [
  { id: 1, text: 'Philosophers Path', done: true },
  { id: 2, text: 'Visit the temple', done: false },
  { id: 3, text: 'Drink matcha', done: false }
];



