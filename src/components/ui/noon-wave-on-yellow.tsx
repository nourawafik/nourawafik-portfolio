'use client';

interface NoonWaveOnYellowProps {
  waving?: boolean;
  className?: string;
}

export function NoonWaveOnYellow({ waving = false, className = '' }: NoonWaveOnYellowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="220"
      height="212"
      viewBox="-20 -50 260 250"
      role="img"
      aria-label="Noon waving"
      className={`${waving ? 'is-waving' : ''} ${className}`}
    >
      <style>{`
        .nw-arm{transform-box:view-box;transform-origin:174px 152px;transform:rotate(4deg)}
        .is-waving .nw-arm{animation:nw-wave 1.4s ease-in-out 2}
        @keyframes nw-wave{0%,100%{transform:rotate(4deg)}50%{transform:rotate(26deg)}}
        @media (prefers-reduced-motion: reduce){.is-waving .nw-arm{animation:none}}
      `}</style>
      <path
        d="M26 64 C20 112 30 158 70 160 C104 162 114 120 112 64 C128 92 150 124 174 152"
        fill="none"
        stroke="#0E2A2D"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g className="nw-arm">
        <path
          d="M174 152 C172 122 173 94 174 60"
          fill="none"
          stroke="#0E2A2D"
          strokeWidth="17"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(69 26) scale(1.8) translate(-69 -26)">
        <path
          d="M64 12 C77 6 89 19 83 32 C77 44 57 42 55 30 C54 21 57 15 64 12 Z"
          fill="#FFFFFF"
          stroke="#0E2A2D"
          strokeWidth="2"
        />
        <circle cx="64" cy="25" r="2.3" fill="#0E2A2D" />
        <circle cx="75" cy="25" r="2.3" fill="#0E2A2D" />
        <path
          d="M63 31 Q69.5 36 76 31"
          fill="none"
          stroke="#0E2A2D"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
