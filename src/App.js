import { Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './Components/Home';
import Inspect from './Screens/Inspect'
import Duel from './Screens/Duel';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inspect' element={<Inspect />} />
        <Route path='/duel' element={<Duel />} />
      </Routes>
    </div>
  );
}

export default App;
