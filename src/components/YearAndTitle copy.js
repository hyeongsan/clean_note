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

  useEffect(() => {}, []);

  useEffect(() => {
    if (movie.title === "none") {
      console.log(pickState);
    }
  }, [pickState]);

  useEffect(() => {
    setButtonNone(true);
    setPickNone(false);
  }, [trash]);

  // var checkbox = document.querySelector(
  //   "input[type='checkbox']:nth-of-type(1):checked"
  // );
  // if (checkbox) {
  //   checkbox.parentNode.remove();
  //   var copyState = [...movies];
  //   var dataFilter = copyState.filter((item) => {
  //     return item.id !== parseInt(checkbox.dataset["code"]);
  //   });
  //   setMovies(dataFilter);
  //   localStorage.setItem("allEntries", JSON.stringify(dataFilter));
  // }

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

  useEffect(() => {}, []);

  //지식인 답변 추가 - 체크된 todo 제거
  const removeChecked = () => {
    setMovies((old) => {
      const removed = old.filter((m) => !m.checked);
      localStorage.setItem("allEntries", JSON.stringify(removed));
      return removed;
    });
  };

  //자기자신 삭제
  const removeSelf = () => {
    setMovies((old) => {
      const removed = old.filter((m) => m !== movie);
      localStorage.setItem("allEntries", JSON.stringify(removed));
      return removed;
    });
  };

  //리엑트의 상태에 체크여부를 저장하도록 수정하였습니다.
  const onChange = (e, movie) => {
    //리엑트 상태를 활용하여 클래스를 관리하는 것을 추천.
    //e.target.parentNode.classList.toggle("on");
    //movies 상태에서 체크여부 수정
    setMovies((old) => {
      const checked = old.map((m) =>
        m === movie ? { ...movie, checked: e.target.checked } : m
      );
      localStorage.setItem("allEntries", JSON.stringify(checked));
      return checked;
    });
  };
  const onChange2 = (e, movie) => {
    //리엑트 상태를 활용하여 클래스를 관리하는 것을 추천.
    //e.target.parentNode.classList.toggle("on");
    //movies 상태에서 체크여부 수정
    setMovies((old) => {
      const checked = old.map((m) =>
        m === movie ? { ...movie, checked2: e.target.checked } : m
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
        <input
          ref={inputRef}
          className={trashShow ? "checkbox on" : "checkbox"}
          type="checkbox"
          onChange={(e) => onChange2(e, movie)}
        />

        <input
          ref={inputRef}
          className={putShow ? "checkbox on" : "checkbox"}
          onChange={(e) => onChange(e, movie)}
          checked={movie.checked ? true : false}
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
