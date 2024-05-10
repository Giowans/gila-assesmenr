import { useState } from 'react';
import './App.css'
import Toggle from './components/Toggle';
import DataFetcher from './components/DataFetcher';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="App" data-theme={theme}>
      <Toggle isChecked={theme === 'dark'} handleChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <h1 className="title">Hi, <span>Giovanni Muñoz </span> here! 👋😊</h1>
      <p>This is my posts placeholder app assesment for a position as a Mid dev at <a target='_blank' href='https://gilasw.com/'>Gila Software</a>. Hope you like it :D</p>
      <DataFetcher />
    </div>
  );
}

export default App;
