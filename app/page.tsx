import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 px-6 text-center dark:from-black dark:to-zinc-950">
      {/* logo: transparent-bg artwork sits on a white card so it reads on any theme */}
      <div className="relative z-10 mb-6 rounded-2xl bg-white px-6 py-4 shadow-sm ring-1 ring-black/5 dark:shadow-none">
        <Image
          src="/regal-chemicals-transparent-logo.png"
          alt="Regal Chemicals"
          width={220}
          height={90}
          priority
        />
      </div>

      {/* floating bubbles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="bubble bubble-1" />
        <span className="bubble bubble-2" />
        <span className="bubble bubble-3" />
        <span className="bubble bubble-4" />
        <span className="bubble bubble-5" />
        <span className="bubble bubble-6" />
      </div>

      {/* flask animation */}
      <div className="relative z-10 mb-8">
        <svg
          width="140"
          height="160"
          viewBox="0 0 140 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="flaskClip">
            <path d="M55 20 V55 L20 130 Q15 145 30 145 H110 Q125 145 120 130 L85 55 V20 Z" />
          </clipPath>

          {/* liquid fill, clipped to flask shape */}
          <g clipPath="url(#flaskClip)">
            <rect x="10" y="90" width="120" height="60" fill="url(#liquidGradient)">
              <animate
                attributeName="y"
                values="100;92;100"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
            <circle className="fizz fizz-1" cx="55" cy="130" r="3" fill="#ffffffaa" />
            <circle className="fizz fizz-2" cx="75" cy="135" r="2.5" fill="#ffffffaa" />
            <circle className="fizz fizz-3" cx="65" cy="120" r="2" fill="#ffffffaa" />
            <circle className="fizz fizz-4" cx="90" cy="128" r="2.5" fill="#ffffffaa" />
          </g>

          <defs>
            <linearGradient id="liquidGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>

          {/* flask outline */}
          <path
            d="M55 20 V55 L20 130 Q15 145 30 145 H110 Q125 145 120 130 L85 55 V20 Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
            className="text-zinc-700 dark:text-zinc-300"
          />
          <line
            x1="48"
            y1="20"
            x2="92"
            y2="20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-zinc-700 dark:text-zinc-300"
          />
        </svg>
      </div>

      <h1 className="relative z-10 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        Under Construction
      </h1>
      <p className="relative z-10 mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        We&apos;re mixing something great in the lab. Please check back soon.
      </p>

      <style>{`
        .bubble {
          position: absolute;
          bottom: -60px;
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, #67e8f9, #0891b2);
          opacity: 0.6;
          animation: rise linear infinite;
        }
        .bubble-1 { left: 10%; width: 18px; height: 18px; animation-duration: 9s; animation-delay: 0s; }
        .bubble-2 { left: 25%; width: 10px; height: 10px; animation-duration: 7s; animation-delay: 1.5s; }
        .bubble-3 { left: 45%; width: 22px; height: 22px; animation-duration: 11s; animation-delay: 3s; }
        .bubble-4 { left: 65%; width: 14px; height: 14px; animation-duration: 8s; animation-delay: 0.5s; }
        .bubble-5 { left: 80%; width: 12px; height: 12px; animation-duration: 10s; animation-delay: 2s; }
        .bubble-6 { left: 92%; width: 16px; height: 16px; animation-duration: 6.5s; animation-delay: 4s; }

        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }

        .fizz {
          animation: fizz 2.2s ease-in infinite;
        }
        .fizz-1 { animation-delay: 0s; }
        .fizz-2 { animation-delay: 0.6s; }
        .fizz-3 { animation-delay: 1.1s; }
        .fizz-4 { animation-delay: 1.7s; }

        @keyframes fizz {
          0% { transform: translateY(0); opacity: 0.8; }
          100% { transform: translateY(-90px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
