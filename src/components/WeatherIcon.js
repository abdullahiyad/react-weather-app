function WeatherIcon({ iconNumber, alt }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/dist/weather_icons/set02/big/${iconNumber}.png`}
      alt={alt}
    />
  );
}
export default WeatherIcon;
