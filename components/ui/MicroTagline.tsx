type MicroTaglineProps = {
  items: string[];
  tone?: "muted" | "red" | "white";
  className?: string;
};

const toneClass: Record<NonNullable<MicroTaglineProps["tone"]>, string> = {
  muted: "text-muted",
  red: "text-red/80",
  white: "text-white/65",
};

export function MicroTagline({
  items,
  tone = "muted",
  className,
}: MicroTaglineProps) {
  return (
    <p
      className={`font-sans text-[11px] font-medium uppercase tracking-[0.3em] ${toneClass[tone]} ${className ?? ""}`}
    >
      {items.join(" · ")}
    </p>
  );
}
