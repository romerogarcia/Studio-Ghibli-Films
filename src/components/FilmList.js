import React, { useState, useEffect } from 'react';

export default function FilmList({ setter }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const url = 'https://ghibliapi.herokuapp.com/films';
    fetch(url)
      .then((r) => r.json())
      .then((r) => setFilms(r));
  }, []);

  return (
    <div>
      <ul className="list">
        {films &&
          films.map((film) => (
            <li
              className="list__li"
              key={film.id}
              onClick={(e) => setter(film)}
            >
              {film.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
