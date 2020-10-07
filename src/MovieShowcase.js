import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
  return movieData.map((object)=> <MovieCard title={object.title} genres={object.genres} poster = {object.poster} IMDBRating={object.IMDBRating}/> )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
