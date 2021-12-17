import React, { useState } from "react";

function Movie({
  movie,
  removeMovie,
  pickMovie,
  togglePointer,
  removePopup,
  pickNone,
}) {
  const [toggle, setToggle] = useState(false);
  const toggleContent = (toggle) => {
    setToggle(!toggle);
  };

  const wideArea = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
  };
  const pointerNone = {
    pointerEvents: "none",
  };

  const pointerAuto = {
    pointerEvents: "auto",
  };

  return (
    <>
      <div className="movieAndButton">
        <div
          className="movie"
          onClick={() => toggleContent(toggle)}
          style={removePopup ? pointerNone : pointerAuto}
        >
          <div className="movie_cont">
            <div className="movie-title">{movie.title}</div>
            {toggle ? <div className="movie-year">{movie.year}</div> : null}

            <div className="movie_btn">
              <button
                onClick={() => pickMovie(movie)}
                style={pickNone ? pointerNone : pointerAuto}
              >
                <i class="fas fa-pencil-alt"></i>
              </button>
              <button
                onClick={() => removeMovie(movie.id)}
                style={removePopup || pickNone ? pointerNone : pointerAuto}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
