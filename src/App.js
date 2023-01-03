import { useReducer } from 'react';
import { TasksList } from './components';
import tasksReducer from './hooks/TasksReducer';

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  let nextId = tasks[-1]?.id;
  // DISPATCH ACITON HANDLERS
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }
  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    })
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div className='h-screen flex flex-col space-y-2 ' >
      <header className=' w-full mx-auto text-center p-4' >
        hola
      </header>
      <main className=''>
        <TasksList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleAddTask} />
      </main>
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
