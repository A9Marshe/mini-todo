import './App.css';
import { TasksList } from './components';
function App() {
  return (
    <div className='h-screen flex flex-col space-y-2 ' >
      <header className=' w-full mx-auto text-center p-4' >
        hola
      </header>
      <main className=''>
        <TasksList />
      </main>
      <footer className=' w-full  mx-auto text-center p-4'>
        © 2023 lorem ipusm
      </footer>
    </div>
  );
}

export default App;


const TASKS = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
