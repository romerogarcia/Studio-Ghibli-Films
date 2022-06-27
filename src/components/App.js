import '../styles/App.scss';
import React, { useState } from 'react';
//import './styles.css';
import FilmList from '../components/FilmList';
import FilmDetail from '../components/FilmDetails';

export default function App() {
  const [film, setFilm] = useState(null);

  return (
    <div className="App">
      <h1>Studio Ghibli Films</h1>
      <FilmList setter={setFilm} />
      <FilmDetail film={film} />
    </div>
  );
}
