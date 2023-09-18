import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';

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
      <div className="my-10 border-[0.3px] border-slate-600" />
      <div className="flex gap-5 text-white ">
        <MoviePoster src={postURL} alt="moviePoster" />
        <div className="flex w-full justify-between">
          <OverviewDiv>
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
          </OverviewDiv>
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

const MoviePoster = tw.img`
 w-1/5 border-[0.3px] border-slate-600
`;

const MovieGenres = styled.li`
  display: inline-block;
  list-style: none;
  border: 1px solid white;
  border-radius: 30px;
  margin-right: 10px;
`;

const OverviewDiv = tw.div`
flex h-full w-1/2 flex-col justify-between
`;

export default MovieOverViewVideo;
