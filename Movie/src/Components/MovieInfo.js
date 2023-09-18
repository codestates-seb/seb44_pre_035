import React, { useState } from 'react';
import { BsBookmarkPlus, BsFillBookmarkPlusFill } from 'react-icons/bs';
import tw from 'tailwind-styled-components';
import StarRatings from 'react-star-ratings';

function MovieInfo({ movieData, creditData }) {
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);
  const cast = creditData.cast.slice(0, 5).map(el => el.name);
  const releaseYear = movieData.release_date.split('-')[0];
  const starPoint = Number(movieData.vote_average).toFixed(1);

  const HandlerBookmark = () => {
    setIsBookmarkChecked(!isBookmarkChecked);
  };

  return (
    <>
      <h1 className="mb-3 text-7xl text-white">{movieData.original_title}</h1>
      {isBookmarkChecked ? (
        <BsFillBookmarkPlusFill
          className="my-2"
          size={30}
          color="white"
          onClick={HandlerBookmark}
        />
      ) : (
        <BsBookmarkPlus
          className="my-2"
          size={30}
          color="white"
          onClick={HandlerBookmark}
        />
      )}
      <div className="my-3 flex text-white">
        <div className="mr-9 flex gap-2">
          <BoldP className="mr-2">{releaseYear}</BoldP>
          <BoldP>{movieData.runtime}분</BoldP>
        </div>
        <div className="flex items-center">
          <BoldP className="mr-3">{starPoint}</BoldP>
          <StarRatings
            className="flex items-center"
            rating={Number(starPoint) / 2}
            starRatedColor="#FAB815"
            svgIconViewBox="0 13 51 35"
            starDimension="17px"
            starSpacing="1px"
            numberOfStars={5}
          />
        </div>
      </div>
      <div className="flex">
        <p className=" mr-2 text-slate-600">출연</p>
        <ul className="flex text-white">
          {cast.map(el => {
            return (
              <li className="mr-2" key={el}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const BoldP = tw.p`
  font-bold
`;

export default MovieInfo;
