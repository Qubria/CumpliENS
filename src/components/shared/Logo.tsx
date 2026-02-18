interface ShieldProps {
  size?: number;
  className?: string;
}

/** Escudo solo — para usar donde no cabe el texto */
export function LogoMark({ size = 32, className }: ShieldProps) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 44 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="CumpliENS"
    >
      {/* Shield body — left darker */}
      <path
        d="M22 2L4 10.5v13c0 10 6.8 19 18 22.5V2z"
        fill="#3730A3"
      />
      {/* Shield body — right lighter */}
      <path
        d="M22 2l18 8.5v13c0 10-6.8 19-18 22.5V2z"
        fill="#4F46E5"
      />
      {/* Top highlight band */}
      <path
        d="M22 2L4 10.5l18-6 18 6L22 2z"
        fill="#818CF8"
        opacity="0.55"
      />
      {/* Inner shield stroke for depth */}
      <path
        d="M22 6.5L8 13v10.5c0 8.2 5.8 15.8 14 18.2 8.2-2.4 14-10 14-18.2V13L22 6.5z"
        stroke="white"
        strokeWidth="0.6"
        opacity="0.1"
      />
      {/* Check mark — thick, rounded */}
      <path
        d="M14 24.5l6 6L31 18"
        stroke="white"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Check mark glow */}
      <path
        d="M14 24.5l6 6L31 18"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.08"
      />
    </svg>
  );
}

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeConfig = {
  sm: { shield: 22, text: "text-sm", gap: "gap-2" },
  md: { shield: 32, text: "text-xl", gap: "gap-2.5" },
  lg: { shield: 48, text: "text-3xl sm:text-4xl", gap: "gap-3" },
};

/** Escudo + texto "CumpliENS" — el logo completo */
export default function Logo({ size = "md", className }: LogoProps) {
  const cfg = sizeConfig[size];

  return (
    <div className={`inline-flex items-center ${cfg.gap} ${className ?? ""}`}>
      <LogoMark size={cfg.shield} />
      <span className={`${cfg.text} font-bold tracking-tight select-none`}>
        <span className="text-text-heading">Cumpli</span>
        <span className="text-primary">ENS</span>
      </span>
    </div>
  );
}
