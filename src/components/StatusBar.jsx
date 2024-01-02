export default function StatusBar({ title, bar, middleBar }) {
  const widthXpBar = (bar * 100) / middleBar;
  return (
    <div>
      <h3>{title}</h3>
      <div className="bar-experience">
        <div className="xp-number">{bar}</div>
        <div
          className="xp"
          style={{
            width: `${widthXpBar}%`,
            backgroundColor: `rgb(100, 255, ${bar / 2})`,
          }}
        ></div>
      </div>
    </div>
  );
}
