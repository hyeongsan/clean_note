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
    var checkbox = document.querySelector("input[type='checkbox']");
    // checkbox.onchange = (e) =>
    //   (checkbox.style.textDecorationLine = checkbox.checked
    //     ? "line-through"
    //     : "");
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
          className={trashShow ? "checkbox on" : "checkbox"}
          type="checkbox"
        />

        <input
          className={putShow ? "checkbox on" : "checkbox"}
          onChange={onChange}
          type="checkbox"
        />

        <div
          className={pickState === movie.id ? "movie on" : "movie"}
          style={pointerAuto}
        >
          <div className="movie_cont">
            {/* <div className="movie-title" onClick={() => toggleContent()}>
              {movie.title}
            </div> */}
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

export default NoneTitle;
