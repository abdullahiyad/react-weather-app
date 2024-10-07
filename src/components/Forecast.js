import "../styles/components/Forecast.scss";
import DailyForecastWidget from "./DailyForecastWidget";
import HorizontallyScrollable from "./HorizontallyScrollable";
import HourlyForecastWidget from "./HourlyForecastWidget";
function Forecast({ title, type, data }) {
  return (
    <div className="Forecast">
      <div className="forecast-container">
        <h3>{title}</h3>
        <HorizontallyScrollable className="widget-container">
          {data.map((ele, index) => (
            <div key={index}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={ele} />
              ) : (
                <DailyForecastWidget data={ele} />
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
}
export default Forecast;
