import React, { useState, useEffect, useRef } from "react";

const YearAndTitle = ({
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
  trashShow,
  putShow,
  addMovie,
}) => {
  const [yearToggle, setYearToggle] = useState(false);
  const inputRef = useRef();
  const toggleContent = () => {
    setYearToggle(!yearToggle);
  };

  const pointerNone = {
    pointerEvents: "none",
    display: "none",
  };

  const pointerAuto = {
    pointerEvents: "auto",
  };

  useEffect(() => {
    if (movie.title === "none") {
      console.log(pickState);
    }
  }, [pickState]);

  useEffect(() => {
    setButtonNone(true);
    setPickNone(false);
  }, [trash]);

  var checkbox = document.querySelector(
    "input[type='checkbox']:nth-of-type(1):checked"
  );
  if (checkbox) {
    checkbox.parentNode.remove();
    var copyState = [...movies];
    var dataFilter = copyState.filter((item) => {
      return item.id !== parseInt(checkbox.dataset["code"]);
    });
    setMovies(dataFilter);
    localStorage.setItem("allEntries", JSON.stringify(dataFilter));
  }

  useEffect(() => {
    var checkbox = document.querySelector(
      "input[type='checkbox']:nth-of-type(1)"
    );

    if (!checkbox.parentNode.classList.contains("on")) {
      checkbox.parentNode.classList.remove("on");
    } else {
      checkbox.parentNode.classList.add("on");
    }

    setButtonNone(true);
    setPickNone(false);
  }, [put]);

  const onChange = (e) => {
    e.target.parentNode.classList.toggle("on");
  };

  return (
    <div>
      <div className="movieAndButton" draggable="true">
        <input
          ref={inputRef}
          className={trashShow ? "checkbox on" : "checkbox"}
          type="checkbox"
          data-code={movie.id}
        />

        <input
          ref={inputRef}
          className={putShow ? "checkbox on" : "checkbox"}
          onChange={onChange}
          type="checkbox"
        />

        <div
          className={pickState === movie.id ? "movie on" : "movie"}
          style={pointerAuto}
        >
          <div className="movie_cont">
            <div
              className={yearToggle ? "movie-title break" : "movie-title"}
              onClick={() => toggleContent()}
            >
              {movie.title}
            </div>
            <span onClick={() => toggleContent()} className="areaHelper"></span>

            {yearToggle ? (
              <div className="movie-year" onClick={() => toggleContent()}>
                {movie.year}
              </div>
            ) : null}

            <div className="movie_btn">
              <button
                onClick={() => pickMovie(movie)}
                style={pickNone ? pointerNone : pointerAuto}
              >
                {/* <i class="fas fa-pencil-alt"></i> */}
                수정
              </button>
              <button
                onClick={() => removeMovie(movie.id)}
                style={pickNone ? pointerNone : pointerAuto}
              >
                {/* <i class="fas fa-trash-alt"></i> */}
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="checkButton">
        <button>
          {/* <i class="fas fa-check"></i> */}
          <i class="far fa-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default YearAndTitle;
