import { Route, Routes } from 'react-router-dom';
import useSWR from "swr";
import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import RickyMorty from './components/RickyMortyHome';
import Testing from './components/Testing';
import Home from './components/Home';
import Comments from './components/Comments';
import CharacterInfo from './components/CharacterInfo';
const fetcher = async (url) => fetch(url).then((res) => res.json());

function App() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSWR(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    fetcher
    );
    console.log("🚀 ~ file: App.js:16 ~ App ~ data:", data)
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ricky' element={<RickyMorty data={data} isLoading={isLoading} page={page} setPage={setPage} />} />
        <Route path='/ricky/test' element={<Testing />} />
        <Route path='/comments' element={<Comments />} />
        <Route path={`/ricky/:name`} element={<CharacterInfo />} />
      </Routes>
    </div>
  ); 
}

export default App;
