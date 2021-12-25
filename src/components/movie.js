import React from "react";
import YearAndTitle from "./YearAndTitle";
import NoneTitle from "./NoneTitle";

function Movie({
  movie,
  movies,
  setMovies,
  removeMovie,
  pickMovie,
  pickNone,
  pickState,
  titleState,
  trash,
  setButtonNone,
  setPickNone,
  put,
  setPut,
  buttonNone,
  putShow,
  trashShow,
  addMovie,
}) {
  return (
    <>
      {movie.title !== null ? (
        <YearAndTitle
          movie={movie}
          movies={movies}
          setMovies={setMovies}
          removeMovie={removeMovie}
          pickMovie={pickMovie}
          pickNone={pickNone}
          pickState={pickState}
          titleState={titleState}
          put={put}
          setPut={setPut}
          trash={trash}
          setButtonNone={setButtonNone}
          setPickNone={setPickNone}
          buttonNone={buttonNone}
          putShow={putShow}
          trashShow={trashShow}
          addMovie={addMovie}
        />
      ) : (
        <NoneTitle
          movie={movie}
          removeMovie={removeMovie}
          pickMovie={pickMovie}
          pickNone={pickNone}
          pickState={pickState}
          titleState={titleState}
          put={put}
          trash={trash}
          setButtonNone={setButtonNone}
          setPickNone={setPickNone}
          buttonNone={buttonNone}
          putShow={putShow}
          trashShow={trashShow}
        />
      )}
    </>
  );
}

export default Movie;
