import React, { useState, useEffect } from "react";

const NoneTitle = ({
  movie,
  removeMovie,
  pickMovie,
  pickNone,
  pickState,
  titleState,
  trash,
  setButtonNone,
  setPickNone,
  put,
  buttonNone,
  trashShow,
  putShow,
  setMovies,
}) => {
  const [yearToggle, setYearToggle] = useState(false);

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
    var checkbox = document.querySelector("input[type='checkbox']:checked");
    if (checkbox) {
      const checkbox = {
        textDecoration: "line-through",
      };
    }
    setButtonNone(true);
    setPickNone(false);
  }, [trash]);

  const checkbox = {
    textDecoration: "none",
  };

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

  const onChange = (e, movie) => {
    setMovies((old) => {
      const checked = old.map((m) =>
        m === movie ? { ...movie, checked: e.target.checked } : m
      );
      localStorage.setItem("allEntries", JSON.stringify(checked));
      return checked;
    });
  };

  return (
    <div>
      <div
        className={movie.checked ? "movieAndButton on" : "movieAndButton"}
        draggable="true"
      >
        {/* <input
          className={trashShow ? "checkbox on" : "checkbox"}
          type="checkbox"
        /> */}

        <div
          className={pickState === movie.id ? "movie on" : "movie"}
          style={pointerAuto}
        >
          <div className="movie_cont">
            <input
              className="checkbox"
              onChange={(e) => onChange(e, movie)}
              checked={movie.checked ? true : false}
              type="checkbox"
              id="cb1"
            />
            <label for="cb1"></label>
            <span onClick={() => toggleContent()} className="areaHelper"></span>

            <div
              className={yearToggle ? "only-year break" : "only-year"}
              onClick={() => toggleContent()}
            >
              {movie.year}
            </div>

            <div className="movie_btn">
              <button
                onClick={() => pickMovie(movie)}
                style={pickNone ? pointerNone : pointerAuto}
              >
                <i class="fas fa-pencil-alt"></i>
              </button>
              {/* <button
                onClick={() => removeMovie(movie.id)}
                style={pickNone ? pointerNone : pointerAuto}
              >
                삭제
              </button> */}
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

export default NoneTitle;
