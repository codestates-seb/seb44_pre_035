import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import useFetchMovie from '../Hooks/use-fetchMovie';
import MovieInfo from '../Components/MovieInfo';
import MovieOverViewVideo from '../Components/MovieOverViewVideo';
import {
  creditFetchedData,
  movieDetailFetchedData,
  videoFetchedData,
} from '../API/movie';
import { API_KEY } from '../Assets/ConstantValue';
import { movieIdActions } from '../Store/movieId-slice';
import useScrollLock from '../Hooks/use-scrollLock';

// TODO 모달 열려있을 때 scroll 금지 -> useCustom 훅 만들어서
function ModalOverlay() {
  const movieId = useSelector(state => state.ID.id);
  const dispatch = useDispatch();
  const [movieData, setMovieData] = useState(null);
  const [backdropURL, setbackdropURL] = useState('');
  const [postURL, setpostURL] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [creditData, setCreditData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const { fetchData: fetchMovieData } = useFetchMovie();
  const { fetchData: fetchVideoData } = useFetchMovie();
  const { fetchData: fetchCreditData } = useFetchMovie();
  const { openScroll } = useScrollLock();

  useEffect(() => {
    fetchMovieData(movieDetailFetchedData(movieId, API_KEY), data => {
      setMovieData(data);
      setbackdropURL(`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`);
      setpostURL(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
    });
    fetchVideoData(videoFetchedData(movieId, API_KEY), data => {
      setVideoData(data);
    });
    fetchCreditData(creditFetchedData(movieId, API_KEY), data => {
      setCreditData(data);
    });
  }, []);

  useEffect(() => {
    if (movieData !== null && videoData !== null && creditData !== null)
      setIsFetching(false);
  }, [movieData, videoData, creditData]);

  const HandlerModalClose = () => {
    openScroll();
    dispatch(movieIdActions.closeModal());
  };

  return (
    <ModalDiv onClick={e => e.stopPropagation()}>
      {isFetching && <p>...Loading</p>}
      {!isFetching && (
        <Main
          backdrop={backdropURL}
          className="h-full w-full rounded-md bg-gradient-to-r from-cyan-500 
          to-blue-500 bg-cover bg-no-repeat text-black"
        >
          <ShadowDiv>
            <button
              className="absolute right-5 top-5  justify-end"
              type="button"
              onClick={HandlerModalClose}
            >
              <AiOutlineClose size={21} color="white" />
            </button>
            <MovieInfo movieData={movieData} creditData={creditData} />
            <MovieOverViewVideo
              postURL={postURL}
              movieData={movieData}
              videoData={videoData}
            />
          </ShadowDiv>
        </Main>
      )}
    </ModalDiv>
  );
}

function Backdrop() {
  const dispatch = useDispatch();
  const { openScroll } = useScrollLock();
  const HandlerModalClose = () => {
    openScroll();
    dispatch(movieIdActions.closeModal());
  };
  return (
    <BackdropDiv onClick={HandlerModalClose}>
      <ModalOverlay />
    </BackdropDiv>
  );
}

function MovieDetail() {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}

// Todo 제목이 긴 경우 아래 부분이 안보임 css수정해야함 px로 해놓은 친구들 rem으로 고치기
const ModalDiv = tw.div`
  w-4/5 h-4/5 relative rounded-md overflow-hidden
`;

const Main = styled.main`
  background-image: url(${props => props.backdrop});
`;

const ShadowDiv = tw.div`
w-full h-full absolute top-0 left-0 bg-black/45 rounded-md p-[3.4rem] pt-[5.6rem]
`;

const BackdropDiv = tw.div`
fixed top-0 left-0 flex justify-center items-center w-full h-screen bg-black/728 z-10
`;

export default MovieDetail;
