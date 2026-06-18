import "./CompetitionAndEvents.css";

function TournamentBracket() {
  return (
    <div className="bracket-wrapper">
      <svg
        viewBox="0 0 260 140"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Round 1 — 4 slots */}
        <rect x="0"   y="10"  width="70" height="22" rx="3" fill="#2a2a2a" />
        <rect x="0"   y="42"  width="70" height="22" rx="3" fill="#2a2a2a" />
        <rect x="0"   y="76"  width="70" height="22" rx="3" fill="#2a2a2a" />
        <rect x="0"   y="108" width="70" height="22" rx="3" fill="#2a2a2a" />

        {/* R1 top pair → R2 */}
        <line x1="70"  y1="21"  x2="86"  y2="21"  stroke="#cc2222" strokeWidth="1.5" />
        <line x1="70"  y1="53"  x2="86"  y2="53"  stroke="#cc2222" strokeWidth="1.5" />
        <line x1="86"  y1="21"  x2="86"  y2="53"  stroke="#cc2222" strokeWidth="1.5" />
        <line x1="86"  y1="37"  x2="102" y2="37"  stroke="#cc2222" strokeWidth="1.5" />

        {/* R1 bottom pair → R2 */}
        <line x1="70"  y1="87"  x2="86"  y2="87"  stroke="#cc2222" strokeWidth="1.5" />
        <line x1="70"  y1="119" x2="86"  y2="119" stroke="#cc2222" strokeWidth="1.5" />
        <line x1="86"  y1="87"  x2="86"  y2="119" stroke="#cc2222" strokeWidth="1.5" />
        <line x1="86"  y1="103" x2="102" y2="103" stroke="#cc2222" strokeWidth="1.5" />

        {/* Round 2 — 2 slots */}
        <rect x="102" y="26"  width="70" height="22" rx="3" fill="#2a2a2a" />
        <rect x="102" y="92"  width="70" height="22" rx="3" fill="#2a2a2a" />

        {/* R2 → R3 */}
        <line x1="172" y1="37"  x2="188" y2="37"  stroke="#cc2222" strokeWidth="1.5" />
        <line x1="172" y1="103" x2="188" y2="103" stroke="#cc2222" strokeWidth="1.5" />
        <line x1="188" y1="37"  x2="188" y2="103" stroke="#cc2222" strokeWidth="1.5" />
        <line x1="188" y1="70"  x2="204" y2="70"  stroke="#cc2222" strokeWidth="1.5" />

        {/* Round 3 — Final */}
        <rect x="204" y="59" width="56" height="22" rx="3" fill="#2a2a2a" />
      </svg>
    </div>
  );
}

export default function CompetitionsEvents() {
  const upcomingEvents = [
    { id: 1, name: "Event in Mumbai", date: "11/11/25", location: "BKC", category: "Lorem" },
    { id: 2, name: "Event in Delhi",  date: "11/11/25", location: "BKC", category: "Lorem" },
  ];

  const pastResults = [
    { id: 1, name: "Bengaluru Regionals", sub: "Lorem Ipsum" },
    { id: 2, name: "Bengaluru Regionals", sub: "Lorem Ipsum" },
    { id: 3, name: "Bengaluru Regionals", sub: "Lorem Ipsum" },
  ];

  return (
    <div className="competitions-page">
      <div className="page-content">

        <h1 className="page-title">Competitions &amp; Events</h1>

        <div className="main-grid">

          {/* ── LIVE NOW COLUMN ── */}
          <div className="live-section">
            <div className="live-badge-row">
              <div className="live-badge">
                <div className="live-dot" />
                <span className="live-text">Live Now</span>
              </div>
              <span className="streamer-tag">Amna Abbas</span>
            </div>

            <div className="live-card">
              <div className="live-card-header">
                <span className="event-name">Bengaluru Regionals</span>
                <span className="ongoing-badge">Ongoing</span>
              </div>
              <div className="event-subtitle">Lorem Ipsum</div>
              <TournamentBracket />
            </div>
          </div>

          {/* ── UPCOMING COLUMN ── */}
          <div className="upcoming-section">
            <div className="section-header">Upcoming</div>

            {upcomingEvents.map((ev) => (
              <div className="upcoming-card" key={ev.id}>
                <div className="upcoming-event-name">{ev.name}</div>
                <div className="event-meta">
                  <div className="meta-item">
                    <div className="meta-label">Date</div>
                    <div className="meta-value">{ev.date}</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">Location</div>
                    <div className="meta-value">{ev.location}</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">Category</div>
                    <div className="meta-value">{ev.category}</div>
                  </div>
                </div>
                <button className="register-btn">Register</button>
              </div>
            ))}
          </div>

          {/* ── PAST RESULTS COLUMN ── */}
         <div className="past-results-section">
  <div className="section-header">Past Results</div>

  <div className="past-results-content">
    {pastResults.map((r) => (
      <div className="past-result-item" key={r.id}>
        <div className="past-result-name">{r.name}</div>
        <div className="past-result-sub">{r.sub}</div>
      </div>
    ))}
  </div>
</div>
  {/* {ddsd} */}

        </div>
      </div>
    </div>
  );
}