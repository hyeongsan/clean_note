import React, { useEffect, useState } from "react";
import MovieForm from "../components/MovieForm";
import Movie from "../components/movie";
// import background from "/img/미.png";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [pick, setPick] = useState();
  const [picktitle, setPicktitle] = useState();
  const [pickYear, setPickYear] = useState();
  const [removePopup, setRemovePopup] = useState(false);
  const [transState, setTransState] = useState();
  const [togglePointer, setTogglePointer] = useState(false);
  const [pickNone, setPickNone] = useState(false);

  useEffect(() => {
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));

    if (existingEntries == null) {
      localStorage.setItem("allEntries", "[]");
    }
    var a = JSON.parse(localStorage.getItem("allEntries"));
    setMovies(a);
    console.log(removePopup);
  }, []);

  // useEffect(() => {
  //   console.log(pick.title);
  // }, [pick]);

  const addMovie = (existingEntries) => {
    //addMovie실행시 local에 값이 먼저들어가고
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    //그 값들을 javascript에서 사용할 수 있게끔 변환해서
    var a = JSON.parse(localStorage.getItem("allEntries"));
    //movies 스테이트에 그 값들을 넣어줌.
    // movies 스테이트가 값에 따라 목록에 뜨도록 되있음. ( 하단에 renderMovies 참조.)
    if (a) {
      setMovies(a);
    }
  };

  const removeMovie = (id) => {
    if (removePopup === true) {
      frontRemove(id);
      setToggle(true);
      var dataFilter = movies.filter((item) => {
        return item.id !== id; // 클릭한거의 id와 movies의 id인 item.id를 비교
      });
      localStorage.setItem("allEntries", JSON.stringify(dataFilter));
    } else {
      setRemovePopup(true);
      setTransState(id);
    }
  };

  const removePopupOk = () => {
    setRemovePopup(false);
    removeMovie(transState);
  };

  const removePopupX = () => {
    setRemovePopup(false);
  };

  const pickMovie = (id) => {
    setPickNone(true);
    setPick(id);
    setPicktitle(id.title);
    setPickYear(id.year);
    // console.log(pick.title);
    setToggle(false);
  };

  //여기서 movies 의 state가 있으면 (을 .length ? 로 표현했다.) 맵을 돌려서 Movie컴포넌트에 movie(각 state)로 전달해서
  // Movie컴포넌트에선 받은 movie를 활용해서 사용 ex) movie.title / movie.year
  // 이것들은 결국 밑에 화면에 뜨도론 return 부분에 적어줌 {renderMovies} 이런식으로
  const renderMovies = movies.length ? ( //숫자가 0이면 false반환함
    movies.map((movie) => {
      return (
        <Movie
          movie={movie}
          key={movie.id}
          removeMovie={removeMovie}
          pickMovie={pickMovie}
          togglePointer={togglePointer}
          setTogglePointer={setTogglePointer}
          removePopup={removePopup}
          pickNone={pickNone}
        />
      );
    })
  ) : (
    <span className="null">추가된 내용이 없습니다</span>
  );

  function frontRemove(id) {
    setMovies(
      movies.filter((item) => {
        return item.id !== id; // 클릭한거의 id와 movies의 id인 item.id를 비교
      })
    );
  }

  const addText = "+";
  const putText = "+";
  const AppBorder = {
    // background: "url({background}) no-repeat center/cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    borderRadius: "10px",
    position: "relative",
    width: "500px",
    height: "960px",
  };

  return (
    <>
      <div className="AppBorder" style={AppBorder}>
        <h1 className="title"></h1>
        {toggle ? (
          <MovieForm
            addMovie={addMovie}
            btnText={addText}
            toggle={toggle}
            movies={movies}
          />
        ) : (
          <MovieForm
            btnText={putText}
            toggle={toggle}
            setToggle={setToggle}
            movies={movies}
            pick={pick}
            picktitle={picktitle}
            pickYear={pickYear}
            setPicktitle={setPicktitle}
            setPickYear={setPickYear}
            setRemovePopup={setRemovePopup}
            setPickNone={setPickNone}
          />
        )}
        <div className="movieBox">{renderMovies}</div>
        {removePopup ? (
          <div className="showPopup">
            <div className="transArea"></div>
            <div className="popupCenter">
              <span>show!!!</span>
              <button onClick={removePopupOk}>Yes</button>
              <button onClick={removePopupX}>NO</button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
