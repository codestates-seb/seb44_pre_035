import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const MoviePoster = tw.img`
 w-[183px] h-full border-[0.3px] border-slate-600
`;

const MovieGenres = styled.li`
  display: inline-block;
  list-style: none;
  border: 1px solid white;
  border-radius: 30px;
  margin-right: 10px;
`;

function MovieOverViewVideo({ postURL, movieData, videoData }) {
  const [videoPath, setVideoPath] = useState(null);

  useEffect(() => {
    if (videoData.results.length) {
      setVideoPath(
        videoData.results.find(video => {
          return video.site === 'YouTube';
        }),
      );
    }
  }, []);

  return (
    <>
      <div className="border-[0.3px] border-slate-600 my-10" />
      <div className="flex gap-5 text-white ">
        <MoviePoster src={postURL} alt="moviePoster" />
        <div className="flex justify-between w-full">
          <div className="flex flex-col w-1/2 h-full justify-between">
            <p className="break-keep">{movieData.overview}</p>
            <ul>
              {movieData.genres.map(genre => {
                return (
                  <MovieGenres
                    className="px-[20px] py-[5px] text-xs"
                    key={genre.id}
                  >
                    {genre.name}
                  </MovieGenres>
                );
              })}
            </ul>
          </div>
          {videoPath && (
            <iframe
              width="30%"
              height="50%"
              src={`https://www.${videoPath.site}.com/embed/${videoPath.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="self-end"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default MovieOverViewVideo;
