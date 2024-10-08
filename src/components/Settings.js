import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../styles/components/Settings.scss";
import { changeTheme } from "../RTK/slice/theme-slice";
import { MEASUREMENT_SYSTEMS } from "../constants";
function Settings() {
  const [openSettings, setOpenSettings] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const { measurementSystem, setMeasurementSystem } = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );
  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div
          className="theme-buttons"
          onClick={() => {
            dispatch(changeTheme(!theme));
          }}
        >
          <div className={`light-theme-btn ${theme ? "" : "active"}`}>
            <i className="bi bi-sun"></i>
          </div>
          <div className={`light-theme-btn ${theme ? "active" : ""}`}>
            <i className="bi bi-moon-fill"></i>
          </div>
        </div>
      </div>
      {/* <div
        className="settings-btn"
        onClick={() => setOpenSettings((prevVal) => !prevVal)}
      >
        <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      </div>
      <div className={`settings-menu ${openSettings ? "open" : ""}`}>
        <div className="measurement-systems">
          <h4>Measurement Systems:</h4>
          <div className="systems">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                className={`system ${
                  system === measurementSystem ? "active" : ""
                }`}
                key={system}
                onClick={() => changeMeasurementSystem(system)}
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Settings;
