import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { IoStarSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { TEXT_LENGTH_LIMIT, STORY_LENGTH_LIMIT } from '../Assets/ConstantValue';
import { movieIdActions } from '../Store/movieId-slice';
import useScrollLock from '../Hooks/use-scrollLock';

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const [isMouseOn, setIsMouseOn] = useState(false);
  const { lockScroll } = useScrollLock();
  const { title, overview } = movie;
  const moviePoster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const date = movie.release_date.slice(0, 4);
  const starPoint = movie.vote_average;
  const cardPosterClassName = isMouseOn && 'scale-105 brightness-40';

  const textLengthOverCut = (text, len) => {
    if (len === TEXT_LENGTH_LIMIT) {
      if (text.length >= TEXT_LENGTH_LIMIT)
        return `${text.substr(0, TEXT_LENGTH_LIMIT)}...`;

      return text;
    }

    if (text.length >= STORY_LENGTH_LIMIT)
      return `${text.substr(0, STORY_LENGTH_LIMIT)}...`;

    return text;
  };

  const handleMouseEnter = () => {
    setIsMouseOn(true);
  };
  const handleMouseLeave = () => {
    setIsMouseOn(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        lockScroll();
        dispatch(movieIdActions.openModal(movie.id));
      }}
    >
      <div className="relative h-52">
        <CardPoster
          className={`${cardPosterClassName}`}
          src={moviePoster}
          alt="포스터"
        />

        <CardStory className={`${isMouseOn ? 'opacity-100' : 'opacity-0'}`}>
          {textLengthOverCut(overview, STORY_LENGTH_LIMIT)}
        </CardStory>
      </div>
      <div className="flex h-12 flex-col bg-transparent">
        <div className="text-white">
          {textLengthOverCut(title, TEXT_LENGTH_LIMIT)}
        </div>
        <div className="flex justify-between text-sm">
          <div className="text-white">{date}</div>
          <div className="mr-2 flex text-red-500">
            <IoStarSharp className="mr-1 mt-1" />
            {starPoint}
          </div>
        </div>
      </div>
    </Card>
  );
}

const Card = tw.article`
  flex
  flex-col
  w-44
  h-64
  m-5
  cursor-pointer
  text-base
`;

const CardPoster = tw.img`
  top-0
  left-0
  w-full
  h-full
  absolute
  duration-300
  backface-hidden
`;

const CardStory = tw.div`
  w-full
  h-full
  top-0
  left-0
  absolute
  z-10
  p-2
  text-white
  flex
  justify-center
  items-center
  duration-300
`;

export default MovieCard;
