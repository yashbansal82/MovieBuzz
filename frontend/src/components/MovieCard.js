import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/movieSlice';

function MovieCard({posterPath,movieId}) {
  const dispatch = useDispatch();

  if(posterPath === null) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  }

  return (
    <div className='w-48 pr-3 transform transition-transform duration-300 hover:scale-105' onClick={handleOpen}>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner"/>
    </div>
  )
}

export default MovieCard;