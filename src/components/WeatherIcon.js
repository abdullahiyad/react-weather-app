function WeatherIcon({ iconNumber, alt }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/dist/weather_icons/set02/big/${iconNumber}.png`}
      alt={alt}
      draggable={false}
    />
  );
}
export default WeatherIcon;
