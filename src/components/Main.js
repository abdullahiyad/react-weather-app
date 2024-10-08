import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeLoadingState } from "../RTK/slice/loading-slice";
import Loading from "./Loading";
import { useState } from "react";
import { getWeatherData } from "../api";

function Main() {
  const isLoading = useSelector((state) => state.loading);
  const place = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [dailyWeather, setDailyWeather] = useState([]);

  useEffect(() => {
    async function getData() {
      dispatch(changeLoadingState(true));

      const cw = await getWeatherData("current", place.place_id, "auto");
      setCurrentWeather(cw.current);

      const hw = await getWeatherData("hourly", place.place_id, "auto");
      setHourlyWeather(hw.hourly.data);

      const dw = await getWeatherData("daily", place.place_id, "auto");
      setDailyWeather(dw.daily.data);

      dispatch(changeLoadingState(false));
    }
    getData();
  }, [place]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Main">
          <CurrentWeather currentWeatherData={currentWeather} />
          <Forecast
            type="hourly"
            title="HOURLY FORECAST"
            data={hourlyWeather}
          />
          <Forecast type="dail" title="21 DAYS FORECAST" data={dailyWeather} />
        </div>
      )}
    </>
  );
}
export default Main;
