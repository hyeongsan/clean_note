import React, { useEffect, useState } from "react";
import MovieForm from "../components/MovieForm";
import Movie from "../components/movie";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import background from "/img/미.png";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [listToggle, setListToggle] = useState(false);
  const [pick, setPick] = useState();
  const [picktitle, setPicktitle] = useState();
  const [pickYear, setPickYear] = useState();
  const [putPopup, setPutPopup] = useState(false);
  const [settingsPopup, setSettingsPopup] = useState(false);
  const [removePopup, setRemovePopup] = useState(false);
  const [transState, setTransState] = useState();
  const [togglePointer, setTogglePointer] = useState(false);
  const [pickNone, setPickNone] = useState(false);
  const [pickState, setPickState] = useState();
  const [titleState, setTitleState] = useState(true);
  const [buttonNone, setButtonNone] = useState(true);
  const [trashShow, setTrashShow] = useState(true);
  const [putShow, setPutShow] = useState(true);
  const [trash, setTrash] = useState(false);
  const [put, setPut] = useState(false);
  const [formDisplayNone, setFormDisplayNone] = useState(false);
  const [destination, setDestination] = useState(false);

  //드래그 start

  // const [characters, updateCharacters] = useState();
  function handleOnDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = Array.from(movies);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMovies(items);
    localStorage.setItem("allEntries", JSON.stringify(items));
  }
  //드래그 end

  useEffect(() => {
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));

    if (existingEntries == null) {
      localStorage.setItem("allEntries", "[]");
    }
    var a = JSON.parse(localStorage.getItem("allEntries"));
    setMovies(a);
    // updateCharacters(a);
    console.log(movies);
  }, []);

  useEffect(() => {});

  if (movies) {
    const movieComponent = document.querySelectorAll(".movie");
    let picked = null;
    let pickedIndex = null;
  }

  const addMovie = (existingEntries) => {
    //addMovie실행시 local에 값이 먼저들어가고
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    //그 값들을 javascript에서 사용할 수 있게끔 변환해서
    var a = JSON.parse(localStorage.getItem("allEntries"));
    //movies 스테이트에 그 값들을 넣어줌.
    // movies 스테이트가 값에 따라 목록에 뜨도록 되있음. ( 하단에 renderMovies 참조.)
    if (a) {
      setMovies(a);
      // updateCharacters(a);
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
      setPickNone(true);
    }
  };

  const removePopupOk = () => {
    setRemovePopup(false);
    removeMovie(transState);
    setPickNone(false);
    setPickState(null);
  };

  const removePopupX = () => {
    setRemovePopup(false);
    setPickNone(false);
  };

  const putPopupOk = () => {
    setPutPopup(!putPopup);

    localStorage.removeItem("inputValue");
    localStorage.removeItem("txtValue");

    pickMovie(transState);
  };
  const putPopupX = () => {
    setPutPopup(!putPopup);
    setPickState(null);
  };

  const pickMovie = (id) => {
    // setPickNone(true);
    setPick(id);
    setPicktitle(id.title);
    setPickYear(id.year);
    // console.log(pick.title);
    setToggle(false);
    setPickState(id.id);

    //토클이 false인 상태이고 && movie.id와 클릭된것의 id가 같은 경우에만 실행되서 토글적용.
    if (!toggle && id.id === pickState) {
      setToggle(true);
      setPickState(null);
    }

    var dataFilter = movies.filter((item) => {
      return item.id === id.id; // 클릭한거의 id와 movies의 id인 item.id를 비교
    });

    var existingInput = JSON.parse(localStorage.getItem("inputValue"));
    var existingTxt = JSON.parse(localStorage.getItem("txtValue"));

    if (existingInput || existingTxt) {
      console.log("popup");
      setPutPopup(true);
      setToggle(true);
      setTransState(id);
    }
  };

  const multiRemove = () => {
    setSettingsPopup(false);
    setButtonNone(false);
    setTrashShow(false);
    setPickNone(true);
  };

  const multiPut = () => {
    setSettingsPopup(false);
    setButtonNone(false);
    setPutShow(false);
    setPickNone(true);
  };

  const removeChecked = () => {
    // console.log("tetet");
    // setTrash(!trash);
    // setTrashShow(!trashShow);
    // setButtonNone(true);
    setMovies((old) => {
      const removed = old.filter((m) => !m.checked);
      localStorage.setItem("allEntries", JSON.stringify(removed));
      return removed;
    });
  };

  //여기서 movies 의 state가 있으면 (을 .length ? 로 표현했다.) 맵을 돌려서 Movie컴포넌트에 movie(각 state)로 전달해서
  // Movie컴포넌트에선 받은 movie를 활용해서 사용 ex) movie.title / movie.year
  // 이것들은 결국 밑에 화면에 뜨도론 return 부분에 적어줌 {renderMovies} 이런식으로
  const renderMovies = movies.length ? (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="12345678">
        {(provided) => (
          <ul
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {movies.map((item, index) => {
              return (
                <Draggable
                  key={item.id.toString()}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Movie
                        movie={item}
                        movies={movies}
                        setMovies={setMovies}
                        key={item.id}
                        removeMovie={removeMovie}
                        pickMovie={pickMovie}
                        togglePointer={togglePointer}
                        setTogglePointer={setTogglePointer}
                        removePopup={removePopup}
                        pickNone={pickNone}
                        listToggle={listToggle}
                        setListToggle={setListToggle}
                        movies={movies}
                        pickState={pickState}
                        setPickState={setPickState}
                        titleState={titleState}
                        trash={trash}
                        setButtonNone={setButtonNone}
                        setPickNone={setPickNone}
                        put={put}
                        setPut={setPut}
                        buttonNone={buttonNone}
                        putShow={putShow}
                        trashShow={trashShow}
                        addMovie={addMovie}
                        removeChecked={removeChecked}
                        destination={destination}
                      />
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  ) : // <span className="null">추가된 내용이 없습니다</span>
  null;

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#ebecf0",
    borderRadius: "10px",
    position: "relative",
    width: "460px",
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
            setPickState={setPickState}
            setSettingsPopup={setSettingsPopup}
            setTitleState={setTitleState}
            titleState={titleState}
            buttonNone={buttonNone}
            setButtonNone={setButtonNone}
            setTrash={setTrash}
            trash={trash}
            setPut={setPut}
            put={put}
            setButtonNone={setButtonNone}
            setTrashShow={setTrashShow}
            trashShow={trashShow}
            setPutShow={setPutShow}
            putShow={putShow}
            removeChecked={removeChecked}
            formDisplayNone={formDisplayNone}
            setFormDisplayNone={setFormDisplayNone}
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
            setPickState={setPickState}
            removeChecked={removeChecked}
            formDisplayNone={formDisplayNone}
            setFormDisplayNone={setFormDisplayNone}
          />
        )}

        {/* <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="12345678">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name, cont }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Movie />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext> */}

        <div className={formDisplayNone ? "movieBox on" : "movieBox"}>
          {renderMovies}
        </div>

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
        {/* {settingsPopup ? (
          <div className="showPopup">
            <div className="transArea"></div>
            <div className="popupCenter">
              <ul className="listbox">
                <li className="list">
                  <button onClick={multiPut}>완료목록체크</button>
                </li>
                <li className="list">
                  <button onClick={multiRemove}>다중목록삭제</button>
                </li>
              </ul>
            </div>
          </div>
        ) : null} */}
        {putPopup ? (
          <div className="showPopup">
            <div className="transArea"></div>
            <div className="popupCenter">
              <div className="popupCenter">
                <span>작성중인 내용이 있습니다. 작성을 취소하시겠습니까?</span>
                <button onClick={putPopupOk}>Yes</button>
                <button onClick={putPopupX}>NO</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
