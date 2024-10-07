import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Place from "./Place";
import { getDailyForecast } from "../api";
import { getHourlyForecast } from "../api";
function Main() {
  return (
    <div className="Main">
      <CurrentWeather />
      <Forecast
        type="hourly"
        title="HOURLY FORECAST"
        data={getHourlyForecast()}
      />
      <Forecast
        type="dail"
        title="21 DAYS FORECAST"
        data={getDailyForecast()}
      />
    </div>
  );
}
export default Main;
