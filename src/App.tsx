import { useContext } from 'react';
import './App.css'
import DataFetcher from './components/DataFetcher';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <h1 className="title">Hi, <span>Giovanni Muñoz </span> here! 👋😊</h1>
      <p>This is my posts placeholder app assesment for a position as a Mid dev at <a target='_blank' href='https://gilasw.com/'>Gila Software</a>. Hope you like it :D</p>
      <DataFetcher />
    </div>
  );
}

export default App;
