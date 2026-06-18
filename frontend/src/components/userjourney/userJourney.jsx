import "./UserJourney.css";
import React from "react";


function IconTools() {
  return (
    <svg className="uj-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
     
      <line x1="8" y1="36" x2="28" y2="16" stroke="white" strokeWidth="3" strokeLinecap="round" />
     
      <path
        d="M26 18 L30 10 M30 10 C33 7 37 8 38 11 C39 14 37 17 34 17 L28 16"
        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        fill="none"
      />
    
      <circle cx="9" cy="35" r="2.5" stroke="white" strokeWidth="2" fill="none" />

   
      <line x1="14" y1="10" x2="32" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
   
      <rect
        x="8" y="5"
        width="10" height="6"
        rx="2"
        stroke="white" strokeWidth="1.8"
        fill="#1a1a1a"
        transform="rotate(-45 13 8)"
      />
    
      <line x1="30" y1="32" x2="35" y2="38" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}


function IconTajMahal() {
  return (
    <svg className="uj-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
     
      <line x1="22" y1="3" x2="22" y2="7" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="22" cy="3" r="1.2" fill="white" />

    
      <path
        d="M22 7 C18 7 13 11 13 17 H31 C31 11 26 7 22 7 Z"
        stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="none"
      />

      <rect x="12" y="17" width="20" height="12" stroke="white" strokeWidth="1.5" fill="none" />

      
      <path
        d="M18 29 L18 24 Q22 20 26 24 L26 29"
        stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />

     
      <rect x="5" y="21" width="6" height="8" rx="1" stroke="white" strokeWidth="1.3" fill="none" />
      <path d="M5 21 Q8 18 11 21" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <line x1="8" y1="17" x2="8" y2="20" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="17" r="0.8" fill="white" />

     
      <rect x="33" y="21" width="6" height="8" rx="1" stroke="white" strokeWidth="1.3" fill="none" />
      <path d="M33 21 Q36 18 39 21" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <line x1="36" y1="17" x2="36" y2="20" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="36" cy="17" r="0.8" fill="white" />

      
      <rect x="9"  y="29" width="26" height="4" stroke="white" strokeWidth="1.3" fill="none" />
      <rect x="5"  y="33" width="34" height="3" stroke="white" strokeWidth="1.3" fill="none" />

      <line x1="3" y1="40" x2="41" y2="40" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}


function IconPodium() {
  return (
    <svg className="uj-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    
      <circle cx="22" cy="10" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
     
      <path
        d="M17 22 Q17 16 22 16 Q27 16 27 22"
        stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      
      <line x1="14" y1="19" x2="22" y2="17" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="30" y1="19" x2="22" y2="17" stroke="white" strokeWidth="1.3" strokeLinecap="round" />

      
      <rect x="15" y="22" width="14" height="11" stroke="white" strokeWidth="1.5" fill="none" />

      
      <rect x="4"  y="27" width="11" height="6"  stroke="white" strokeWidth="1.5" fill="none" />
 <rect x="29" y="29" width="11" height="4"  stroke="white" strokeWidth="1.5" fill="none" />

      
      <line x1="2" y1="40" x2="42" y2="40" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}


function IconGroup() {
  return (
    <svg className="uj-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">

      <circle cx="10" cy="15" r="4" stroke="white" strokeWidth="1.4" fill="none" />
      <path
        d="M3 36 C3 28 17 28 17 36"
        stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"
      />

   
      <circle cx="34" cy="15" r="4" stroke="white" strokeWidth="1.4" fill="none" />
      <path
        d="M27 36 C27 28 41 28 41 36"
        stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none"
      />

      <circle cx="22" cy="12" r="5.5" stroke="white" strokeWidth="1.7" fill="#111" />
      <path
        d="M11 38 C11 29 33 29 33 38"
        stroke="white" strokeWidth="1.7" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

const steps = [
  {
    id: 1,
    label: "Step 1",
    title: "Build Your\nTeam",
    Icon: IconTools,
  },
  {
    id: 2,
    label: "Step 2",
    title: "Compete Across\nIndia",
    Icon: IconTajMahal,
  },
  {
    id: 3,
    label: "Step 3",
    title: "Earn National\nRanking & Value",
    Icon: IconPodium,
  },
  {
    id: 4,
    label: "Step 4",
    title: "Join The\nLeague",
    Icon: IconGroup,
  },
];

export default function UserJourney() {
  return (
    <section className="uj-section">
      <div>
        {/* Header */}
        <div className="uj-header">
          <span className="uj-eyebrow">User Journey</span>
          <br />
          <span className="uj-title">Your Path to the League</span>
          <p className="uj-subtitle">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </div>

        {/* Steps */}
        <div className="uj-steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="uj-step">
                <div className="uj-circle">
                  <step.Icon />
                </div>

                <span className="uj-step-label">{step.label}</span>

                <span className="uj-step-title">
                  {step.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < step.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>

            
              {index < steps.length - 1 && (
                <div className="uj-connector" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );

}