import { TasksList } from './components';
import './App.css'
export default function App() {


  return (
    <div className='h-screen flex flex-col space-y-2 ' >
      <header className=' w-full mx-auto text-center p-4' >
        hola
      </header>
      <main className=''>
        <TasksList initialTasks={initialTasks} />
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
