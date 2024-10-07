import "../styles/components/Settings.scss";
function Settings() {
  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons">
          <div className="light-theme-btn">
            <i className="bi bi-sun"></i>
          </div>
          <div className="dark-theme-btn active">
            <i className="bi bi-moon-fill"></i>
          </div>
        </div>
      </div>
      <div className="settings-btn">
        <i className="bi bi-gear-wide-connected"></i>
      </div>
    </div>
  );
}
export default Settings;
