import React, { useState, useRef } from 'react'
import Movie from './Movie';

export default function AddMovieForm() {
  const [movies, setMovies] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const rating = event.target.elements.rating.value;

    if (!title || rating == 0) {
        window.alert("Måste fylla i både titel och betyg!");  
        return;
      }

    setMovies(movies.concat({ title, rating }));
    event.target.reset();
  };

   
  return (
    <div>
      <fieldset>
        <legend>Lägg till en film</legend>
        <form onSubmit={handleSubmit}>

          <label htmlFor="title-field">Title:</label>
          <input type="text" id="title-field" className="form-control" name="title"/>
          <label htmlFor="rating-field">Betyg:</label>

          <select id="rating-field" className="form-control" name="rating">
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" className="btn btn-success mt-3" value="Spara film" />
        </form>
      </fieldset>

      <ul className='list-group'>
        {movies.map((movie, index) => (
          <Movie key={index} title={movie.title} rating={movie.rating} />
        ))}
      </ul>

    </div>
  );
}