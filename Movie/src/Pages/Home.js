import React, { useEffect, useState } from 'react';
import movieData from '../API/movie';
import { API_KEY } from '../Assets/ConstantValue';
import MovieCard from '../Components/MovieCard';

export default function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    movieData(API_KEY)
      .then(res => res.json())
      .then(res => setData(res.results[2]));
  }, []);

  return (
    <section id="home" className="ml-56">
      {data && <MovieCard movie={data} />}
    </section>
  );
}
