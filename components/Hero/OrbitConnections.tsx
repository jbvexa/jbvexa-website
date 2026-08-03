export default function OrbitConnections() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 700 700"
      fill="none"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#18C7A5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#18C7A5" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Top */}
      <line
        x1="350"
        y1="350"
        x2="350"
        y2="120"
        stroke="url(#lineGradient)"
        strokeWidth="2"
      />

      {/* Right Top */}
      <line
        x1="350"
        y1="350"
        x2="520"
        y2="200"
        stroke="url(#lineGradient)"
        strokeWidth="2"
      />

      {/* Right Bottom */}
      <line
        x1="350"
        y1="350"
        x2="520"
        y2="500"
        stroke="url(#lineGradient)"
        strokeWidth="2"
      />

      {/* Bottom */}
      <line
        x1="350"
        y1="350"
        x2="350"
        y2="580"
        stroke="url(#lineGradient)"
        strokeWidth="2"
      />

      {/* Left Bottom */}
      <line
        x1="350"
        y1="350"
        x2="180"
        y2="500"
        stroke="url(#lineGradient)"
        strokeWidth="2"
      />

      {/* Left Top */}
      <line
        x1="350"
        y1="350"
        x2="180"
        y2="200"
        stroke="url(#lineGradient)"
        strokeWidth="2"
      />
    </svg>
  );
}