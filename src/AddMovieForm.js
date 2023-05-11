import React, { useState, useRef } from 'react'
import Movie from './Movie';

export default function AddMovieForm() {
  const [movies, setMovies] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const rating = event.target.elements.rating.value;
    const id = movies.length > 0 ? movies[movies.length -1].id + 1 : 1;

    if (!title || rating == 0) {
        window.alert("Måste fylla i både titel och betyg!");  
        return;
      }

    setMovies(movies.concat({id, title, rating }));
    event.target.reset();
  };

  function deleteMovie(id){
    setMovies(movies.filter((movie) => movie.id != id));
  }

  function sortByTitle(){
    setMovies(movies.concat().sort((a, b) => a.title.localeCompare(b.title)));
  }

  function sortByRating(){
    setMovies(movies.concat().sort((a, b) => b.rating - a.rating));
  }

   
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

          <input type="submit" id="SaveBtn" className="btn btn-success mt-3" value="Spara film" />
        </form>
      </fieldset>

      <h2>Inlagda filmer</h2>

      <ul className='list-group'>
        {movies.map((movie) => ( 
          <Movie key={movie.id} id={movie.id} title={movie.title} rating={movie.rating} deleteMovie={deleteMovie} />
        ))}
      </ul>

      <button id='alfa' className="btn btn-primary mt-3" onClick={sortByTitle}>Alfabetisk ordning</button>
      <button id='betyg' className="btn btn-primary mt-3" onClick={sortByRating}>Betygsordning</button>

    </div>
  );
}