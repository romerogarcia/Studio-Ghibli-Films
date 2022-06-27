import React from 'react';

export default function FilmDetail({ film }) {
  const style = {
    backgroundColor: '#ffccff',
    padding: 10,
  };

  if (!film) {
    return <div style={style}>Select a film</div>;
  }
  return (
    <div className="details" style={style}>
      <img
        className="details__img"
        alt={film.movie_banner}
        title="Imagen de la película"
        src={film.movie_banner}
      />
      <h2 className="details__title">{film.title}</h2>
      <h3 className="details__subtitle">{film.original_title} </h3>
      <p className="details__desc">{film.description}</p>
      <p className="details__director">Director:{film.director}</p>
      <p className="details__producer">Producer:{film.producer}</p>
      <p className="details__released">Released:{film.release_date}</p>
    </div>
  );
}
