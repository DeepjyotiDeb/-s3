import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col gap-2'>
      <h1>Vite + React</h1>
      <div className='flex gap-2'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <button
          id='main'
          className='p-2 bg-neutral-400 text-white rounded ml-2 hover:bg-neutral-500 focus:ring-2 focus:ring-neutral-400'
          name='submission'
          role='button'
          data-cy='submit'
          onClick={() => setCount((count) => count + 1)}
        >
          Submit
        </button>
        <p className='text-2xl' data-cy='count'>
          {count}
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
