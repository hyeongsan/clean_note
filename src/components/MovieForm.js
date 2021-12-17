import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import InputField from "./InputField";
import TxtareaField from "./txtareaField";

const MovieForm = (props) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [TitleError, setTitleError] = useState("");
  const [YearError, setYearError] = useState("");
  const [formDisplayNone, setFormDisplayNone] = useState(false);

  useEffect(() => {
    resetErrors();
  }, [props.pick]);

  const onSubmit = (e) => {
    e.preventDefault();
    resetErrors();
    if (props.toggle === true) {
      if (validateForm()) {
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
      }
    }
  };

  const putSubmit = (e) => {
    console.log("수정");
    e.preventDefault();
    resetErrors();
    props.setPickNone(false);

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
      setTitleError("제목을 넣어주세요");
      validated = false;
    }
    if (!movieYear) {
      setYearError("내용을 넣어주세요");
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

  const formFolding = () => {
    resetErrors();
    setFormDisplayNone(!formDisplayNone);
    console.log(formDisplayNone);
  };

  const toggleFlex = formDisplayNone
    ? {
        display: "none",
      }
    : { display: "block" };

  const arrowRotate = formDisplayNone
    ? {
        transform: "rotate(180deg)",
      }
    : {
        transform: "rotate(0deg)",
      };

  return (
    <div className="App">
      {props.toggle ? (
        <div>
          <form className="movieForm" onSubmit={onSubmit}>
            <div className="field" style={toggleFlex}>
              <InputField
                type="text"
                value={movieTitle}
                placeholder="제목"
                onChange={(e) => setMovieTitle(e.target.value)}
                errorMessage={TitleError}
              />
              <TxtareaField
                type="text"
                value={movieYear}
                placeholder="내용"
                onChange={(e) => setMovieYear(e.target.value)}
                errorMessage={YearError}
              />
            </div>
            <div className="buttonIcon">
              <button type="button" onClick={formFolding} style={arrowRotate}>
                <i class="fas fa-chevron-up"></i>
              </button>
              <button type="submit" className="addbtn" style={toggleFlex}>
                <span className="plusIcon">
                  <i class="fas fa-plus"></i>
                </span>
              </button>
              <button type="button">
                <i class="fas fa-cog"></i>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <form className="movieForm" onSubmit={putSubmit}>
          <div className="field">
            <InputField
              type="text"
              value={props.picktitle}
              placeholder="주제"
              onChange={(e) => props.setPicktitle(e.target.value)}
              errorMessage={TitleError}
            />
            <TxtareaField
              type="text"
              value={props.pickYear}
              placeholder="내용"
              onChange={(e) => props.setPickYear(e.target.value)}
              errorMessage={YearError}
            />
          </div>

          <div className="buttonIcon" style={putIconCenter}>
            {/* <button
              type="button"
              onClick={() => {
                console.log("test!!");
              }}
            >
              <i class="fas fa-chevron-up"></i>
            </button> */}
            <button type="submit" className="addbtn pink" style={putIcon}>
              <span className="plusIcon">
                <i class="fas fa-plus"></i>
              </span>
            </button>
            {/* <button type="button">
              <i class="fas fa-cog"></i>
            </button> */}
          </div>
        </form>
      )}
    </div>
  );
};

export default MovieForm;
