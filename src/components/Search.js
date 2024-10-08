import "../styles/components/Search.scss";
import { searchPlaces } from "../api/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPosition } from "../RTK/slice/weather-slice";
function Search() {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [SearchRes, setSearchRes] = useState([]);
  const [openResultList, setOpenResultList] = useState(false);

  //display the result of search
  const onSearch = async (e) => {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchRes(data);
    setOpenResultList(data.length);
  };
  //change the position
  const changePosition = (position) => {
    dispatch(setPosition(position));
    setText("");
    setOpenResultList(false);
  };
  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            name="search-city"
            placeholder="Search City ..."
            value={text}
            onChange={onSearch}
          />
        </div>
        {openResultList && (
          <div className="search-results">
            <div className="results-container">
              {SearchRes.map((result) => (
                <div
                  className="result"
                  onClick={() => changePosition(result)}
                  key={result.place_id}
                >
                  {result.name} ,{result.adm_area1},
                  {result.country === "State of Israel"
                    ? "Palestine"
                    : result.country}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Search;
