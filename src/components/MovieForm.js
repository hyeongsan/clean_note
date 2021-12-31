import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import InputField from "./InputField";
import TxtareaField from "./txtareaField";

const MovieForm = (props) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [TitleError, setTitleError] = useState("");
  const [YearError, setYearError] = useState("");
  const [searchBar, setSearchBar] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  let titleCheck = true;

  useEffect(() => {
    resetErrors();
  }, [props.pick]);

  const onSubmit = (e) => {
    e.preventDefault();
    resetErrors();
    if (props.toggle === true) {
      if (validateForm()) {
        if (titleCheck) {
          validateTrue();
        }

        if (!titleCheck) {
          titleCheck = true;
          validateFalse();
        }
      }
    }
  };

  const validateTrue = () => {
    let newMovie = {
      id: Date.now(),
      title: movieTitle,
      year: movieYear,
    };
    console.log("실행");

    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if (existingEntries == null) {
      localStorage.setItem("allEntries", []);
    }
    existingEntries.push(newMovie);

    props.addMovie(existingEntries);
    setMovieTitle("");
    setMovieYear("");
  };

  const validateFalse = () => {
    let newMovie = {
      id: Date.now(),
      title: null,
      year: movieYear,
    };
    console.log("실행");

    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if (existingEntries == null) {
      localStorage.setItem("allEntries", []);
    }
    existingEntries.push(newMovie);

    props.addMovie(existingEntries);
    setMovieTitle("");
    setMovieYear("");
  };

  const putSubmit = (e) => {
    console.log("수정");
    e.preventDefault();
    resetErrors();
    props.setPickNone(false);
    props.setPickState(null);

    if (props.toggle === false) {
      props.setToggle(true);
      console.log("test");

      var copyState = [...props.movies];

      copyState.map((item) => {
        var correcting = item.id === props.pick.id;
        if (correcting) {
          item.title = props.picktitle;
          item.year = props.pickYear;
        }
      });
    }
    localStorage.setItem("allEntries", JSON.stringify(copyState));

    setMovieTitle("");
    setMovieYear("");
  };

  const validateForm = () => {
    let validated = true;
    if (!movieTitle) {
      // setTitleError("제목을 넣어주세요");
      titleCheck = false;
      // validated = true;
    }

    if (!movieYear) {
      // setYearError("내용을 넣어주세요");
      validated = false;
    }
    if (validated) {
      setMovieTitle("");
      setMovieYear("");
    }
    return validated;
  };

  const resetErrors = () => {
    setTitleError("");
    setYearError("");
  };

  const putIconCenter = {
    width: "358px",
    textAlign: "center",
    display: "block",
  };

  const putIcon = {
    color: "#fff",
    backgroundColor: "#f2bdbd",
    boxShadow: "none",
  };

  // const settingPopup = () => {
  //   props.setSettingsPopup(true);
  // };

  const formFolding = () => {
    resetErrors();
    props.setFormDisplayNone(!props.formDisplayNone);
  };

  const toggleFlex = props.formDisplayNone
    ? {
        display: "none",
      }
    : { display: "unset" };

  // const arrowRotate = props.formDisplayNone
  //   ? {
  //       transform: "rotate(180deg)",
  //     }
  //   : {
  //       transform: "rotate(0deg)",
  //     };

  const inputFieldValue = (e) => {
    setMovieTitle(e.target.value);
  };
  const txtFieldValue = (e) => {
    setMovieYear(e.target.value);
  };

  const trashClick = () => {
    props.setTrash(!props.trash);
    props.setTrashShow(!props.trashShow);
  };

  const putClick = () => {
    props.setPut(!props.put);
    props.setPutShow(!props.putShow);
  };

  const searchClick = () => {
    props.setButtonNone(false);
    setSearchBar(true);
  };

  const resetSearch = () => {
    props.setButtonNone(true);
    setSearchBar(false);
  };

  const sideBarShow = () => {
    setSideBar(false);
  };

  useEffect(() => {
    var existingInput = JSON.parse(localStorage.getItem("inputValue"));
    var existingTxt = JSON.parse(localStorage.getItem("txtValue"));
    if (existingInput === null) {
      localStorage.setItem("inputValue", []);
    } else {
      setMovieTitle(existingInput);
    }

    if (existingTxt === null) {
      localStorage.setItem("txtValue", []);
    } else {
      setMovieYear(existingTxt);
    }
  }, []);

  useEffect(() => {
    if (movieTitle) {
      localStorage.setItem("inputValue", JSON.stringify(movieTitle));
    } else {
      localStorage.removeItem("inputValue");
    }
  }, [movieTitle]);

  useEffect(() => {
    if (movieYear) {
      localStorage.setItem("txtValue", JSON.stringify(movieYear));
    } else {
      localStorage.removeItem("txtValue");
    }
  }, [movieYear]);

  return (
    <div className="App">
      {props.toggle ? (
        <div>
          <form className="movieForm" onSubmit={onSubmit}>
            <div className="field" style={toggleFlex}>
              <InputField
                type="text"
                value={movieTitle}
                placeholder=""
                onChange={inputFieldValue}
                errorMessage={TitleError}
              />
              <TxtareaField
                type="text"
                value={movieYear}
                placeholder=""
                onChange={txtFieldValue}
                errorMessage={YearError}
              />
            </div>
            <div className="buttonIcon">
              <button
                type="button"
                onClick={formFolding}
                className={props.formDisplayNone ? null : "press"}
              >
                <span className={props.formDisplayNone ? "original" : "rotate"}>
                  <i class="fas fa-chevron-down"></i>
                </span>
              </button>

              <button
                type="submit"
                className={props.buttonNone ? "addbtn" : "btnNone"}
                style={toggleFlex}
              >
                <span className="plusIcon">
                  <span>
                    <i class="fas fa-plus"></i>
                  </span>
                </span>
              </button>
              {/* <button
                onClick={searchClick}
                type="button"
                className={props.buttonNone ? "btnShow" : "btnNone"}
              >
                <span>
                  <i class="fas fa-check"></i>
                </span>
              </button> */}
              {/* {searchBar ? (
                <>
                  <div className="searchForm">
                    <input
                      type="text"
                      className="searchInput"
                      placeholder="내용을 검색해주세요."
                    />
                    <button type="button" onClick={resetSearch}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </>
              ) : null} */}
              <button
                type="button"
                // onClick={settingPopup}
                onClick={props.removeChecked}
                // className={props.buttonNone ? "btnShow" : "btnNone"}
              >
                <span>
                  <i class="fas fa-trash"></i>
                </span>
              </button>
              {/* {props.trashShow ? null : (
                <button type="button" onClick={props.removeChecked}>
                  <span>
                    <i class="fas fa-trash"></i>
                  </span>
                </button>
              )} */}
              {/* {props.putShow ? null : (
                <button type="button" onClick={putClick}>
                  <span>
                    <i class="fas fa-edit"></i>
                  </span>
                </button>
              )} */}
            </div>
          </form>
        </div>
      ) : (
        <form className="movieForm" onSubmit={putSubmit}>
          <div className="field">
            <InputField
              type="text"
              value={props.picktitle}
              placeholder=""
              onChange={(e) => props.setPicktitle(e.target.value)}
              errorMessage={TitleError}
            />
            <TxtareaField
              type="text"
              value={props.pickYear}
              placeholder=""
              onChange={(e) => props.setPickYear(e.target.value)}
              errorMessage={YearError}
            />
          </div>

          <div className="buttonIcon" style={putIconCenter}>
            <button type="submit" className="addbtn pink" style={putIcon}>
              <span className="plusIcon">
                <i class="fas fa-plus"></i>
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MovieForm;
