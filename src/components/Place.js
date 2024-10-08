import { useSelector } from "react-redux";

function Place() {
  const place = useSelector((state) => state.weather);
  return (
    <div>
      <i className="bi bi-geo-alt-fill"></i> <b>{place.name}</b> ,&nbsp;
      {place.country === "State of Israel" ? "Palestine" : place.country}
    </div>
  );
}
export default Place;
