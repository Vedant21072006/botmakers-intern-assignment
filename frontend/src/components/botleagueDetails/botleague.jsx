import "./botleague.css";
import botimage from '../../assets/images/botimage.png'
const whatItems = [
  { num: "1.", label: "Structured Events", desc: '"From one-off events to a year-round competitive season."' },
  { num: "2.", label: "Digital Identity", desc: '"Your professional robotics legacy, tracked and verified."' },
  { num: "3.", label: "National Ranking", desc: '"Benchmark your skills against the best engineers in India."' },
  { num: "4.", label: "Career Pathway", desc: '"Turning arena victories into real-world industry opportunities."' },
];

const categories = [
  { label: "Mini\nMakers", desc: "Where Creativity Meets Logic.", active: true },
  { label: "Junior\nInnovators", desc: "Engineering & Strategy Fundamentals.", active: false },
  { label: "Young\nEngineers", desc: "Advanced Wireless & Autonomous Control.", active: false },
  { label: "Robo\nMinds", desc: "Elite Professional Sports & Robotics.", active: false },
];

export default function BotLeague() {
  return (
    <div className="bl-wrapper">
      <h2 className="bl-section-title">What is BotLeague?</h2>
      <div className="bl-what-grid">
        <div className="bl-what-items">
          {whatItems.map((item) => (
            <div className="bl-what-item" key={item.num}>
              <p className="bl-num">{item.num}</p>
              <p className="bl-label">{item.label}</p>
              <p className="bl-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bl-image-box">
          <img
            src={botimage}
            alt="Robotics technology"
          />
        </div>
      </div>

      <h2 className="bl-section-title">Categories</h2>
      <div className="bl-cards-grid">
        {categories.map((cat) => (
          <div className={`bl-cat-card${cat.active ? " bl-cat-card--active" : ""}`} key={cat.label}>
            <div className="bl-cat-icon">
              {cat.label.startsWith("Mini") && <span>⚙</span>}
              {cat.label.startsWith("Junior") && <span>💡</span>}
              {cat.label.startsWith("Young") && <span>🤖</span>}
              {cat.label.startsWith("Robo") && <span>🧠</span>}
            </div>
            <p className="bl-cat-name">
              {cat.label.split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
            <p className="bl-cat-desc">{cat.desc}</p>
            <p className="bl-learn-more">Learn More &nbsp;→</p>
          </div>
        ))}
      </div>
    </div>
  );
}