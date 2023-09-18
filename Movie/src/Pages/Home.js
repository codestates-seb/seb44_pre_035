import React, { useEffect, useState } from 'react';
import movieData from '../API/movie';
import { API_KEY } from '../Assets/ConstantValue';
import MovieCard from '../Components/MovieCard';

export default function Home() {
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');

  useEffect(() => {
    movieData(API_KEY)
      .then(res => res.json())
      .then(res => {
        setData(res.results[4]);
        setData2(res.results[3]);
      });
  }, []);

  return (
    <section id="home" className="ml-56">
      {data && <MovieCard movie={data} />}
      {data2 && <MovieCard movie={data2} />}
    </section>
  );
}
