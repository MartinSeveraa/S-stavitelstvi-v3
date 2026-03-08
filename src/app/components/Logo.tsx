import svgPaths from "../../imports/svg-5kp7fl1wra.ts";

interface LogoProps {
  variant?: 'default' | 'white';
  showText?: boolean;
}

export function Logo({ variant = 'default', showText = false }: LogoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-[77px] w-[200px] overflow-clip relative flex-shrink-0">
        <div className="absolute h-[62px] left-[29px] top-[8px] w-[141.959px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141.959 62">
            <g>
              <path d={svgPaths.p11549400} fill={variant === 'white' ? '#FFFFFF' : '#D9D9D9'} />
              <path d={svgPaths.p1c831280} fill={variant === 'white' ? '#FFFFFF' : '#D9D9D9'} />
              <path d={svgPaths.p3c4e4480} fill="#CE2123" />
            </g>
          </svg>
        </div>
      </div>
      {showText && (
        <div className="font-['Montserrat',sans-serif]">
          <h1 className={`text-2xl font-bold tracking-wide ${variant === 'white' ? 'text-white' : 'text-gray-900'}`}>
            S-STAVITELSTVÍ
          </h1>
          <p className={`text-sm ${variant === 'white' ? 'text-white/80' : 'text-gray-600'}`}>
            Kvalita a tradice
          </p>
        </div>
      )}
    </div>
  );
}
