import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; 
import './styles/PopularMovies.css';

function PopularMovies({ movies }) {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="movie-slider">
      <h2 className="popular-movies-title">Popular Movies</h2>
      <div className="separator"></div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie.id)}> {/* Make card clickable */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            {/* <h3 className="movie-title">{movie.title}</h3> */}
          </div>
        ))}
      </Slider>
      <div className="separator"></div>
    </div>
  );
}

export default PopularMovies;