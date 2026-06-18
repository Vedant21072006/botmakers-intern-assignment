import "./LeagueAdv.css";
import leaderboardImg from "../../assets/images/leaderboard.png";

const items = [
  {
    title: "National Recognition",
    desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="16" r="10" stroke="#e8363a" strokeWidth="2.5" />
        <path d="M16 24 L10 40 L22 34 L34 40 L28 24" stroke="#e8363a" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <circle cx="22" cy="16" r="5" fill="#e8363a" />
        <path d="M19 16 L21 18 L25 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fair Judging",
    desc: '"Compete with confidence under standardized, expert-led evaluation."',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10 L20 18 L22 14 L34 22" stroke="#e8363a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 10 L36 10 L36 18" stroke="#e8363a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="7" y="28" width="8" height="10" rx="2" fill="#e8363a" />
        <rect x="18" y="22" width="8" height="16" rx="2" fill="#e8363a" opacity="0.7" />
        <rect x="29" y="18" width="8" height="20" rx="2" fill="#e8363a" opacity="0.5" />
        <path d="M6 38 L38 38" stroke="#e8363a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Career Ops",
    desc: '"Bridge the gap between arena victories and top-tier tech placements."',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="28" height="18" rx="3" stroke="#e8363a" strokeWidth="2.5" />
        <path d="M14 20 L14 16 C14 10 30 10 30 16 L30 20" stroke="#e8363a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="18" y="27" width="8" height="6" rx="2" fill="#e8363a" />
        <path d="M22 27 L22 30" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "High - Energy Eco",
    desc: '"Join a nationwide community of elite innovators and robotics athletes."',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6 L16 20 L8 20 L15 28 L12 40 L22 33 L32 40 L29 28 L36 20 L28 20 Z" stroke="#e8363a" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <path d="M22 14 L19 22 L22 20 L25 22 Z" fill="#e8363a" />
      </svg>
    ),
  },
];

export default function LeagueAdvantage() {
  return (
    <div className="la-wrap">
      <div className="la-left">
        <p className="la-why">Why Register ?</p>
        <h2 className="la-title">The League Advantage</h2>
        <div className="la-items">
          {items.map((item) => (
            <div className="la-item" key={item.title}>
              <div className="la-icon-box">{item.icon}</div>
              <div>
                <p className="la-item-title">{item.title}</p>
                <p className="la-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="la-right">
        <img src={leaderboardImg} alt="Leaderboard" className="la-lb-img" />
      </div>
    </div>
  );
}