import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RickyMorty from './components/RickyMortyHome';
import Testing from './components/Testing';
import Home from './components/Home';
import Comments from './components/Comments';
import CharacterInfo from './components/CharacterInfo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ricky' element={<RickyMorty />} />
        <Route path='/ricky/test' element={<Testing />} />
        <Route path='/comments' element={<Comments />} />
        <Route path={`/ricky/:name`} element={<CharacterInfo />} />
      </Routes>
    </div>
  );
}

export default App;
