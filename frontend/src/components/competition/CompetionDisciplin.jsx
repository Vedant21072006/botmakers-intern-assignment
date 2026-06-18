import "./CompetitionDisciplines.css";
import i1 from '../../assets/images/i-1.jpg'
import i2 from '../../assets/images/i-2.jpg'
import i3 from '../../assets/images/i-3.jpg'
import i4 from '../../assets/images/i-4.jpg'
import i5 from '../../assets/images/i-5.jpg'
import i6 from '../../assets/images/i-6.png'
import i7 from '../../assets/images/i-7.png'

const row1 = [
  {
    img: i1,
    label: "Robo Race",
    light: false,
  },
  {
    img: i2,
    label: "Line Follower",
    light: true,
  },
  {
    img: i3,
    label: "RC Racing",
    light: false,
  },
  {
    img: i4,
    label: "FPV Drone Racing & Aeromodelling",
    light: false,
  },
];

const row2 = [
  {
    img: i5,
    label: "Robo Hockey",
    light: false,
  },
  {
    img: i6,
    label: "Robo War",
    light: false,
  },
];

function Card({ img, label, light }) {
  return (
    <div className={`cd-card${light ? " cd-card--light" : ""}`}>
      <img src={img} alt={label} />
      <div className="cd-card-label">{label}</div>
    </div>
  );
}

export default function CompetitionDisciplines() {
  return (
    <div className="cd-wrapper">
      <img
        className="cd-bg-circuit"
        src={i7}
        alt=""
      />
      <p className="cd-sports-label">Sports</p>
      <h2 className="cd-title">Competition Disciplines</h2>

      <div className="cd-grid-row">
        {row1.map((c) => (
          <Card key={c.label} {...c} />
        ))}
      </div>

      <div className="cd-grid-row">
        {row2.map((c) => (
          <Card key={c.label} {...c} />
        ))}
        <div className="cd-card cd-card--empty" />
        <div className="cd-card cd-card--empty" />
      </div>
    </div>
  );
}