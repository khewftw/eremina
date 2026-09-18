type ArrowLinkProps = {
  label?: string;
  className?: string;
};

export function ArrowLink({ label = "Читать", className }: ArrowLinkProps) {
  return (
    <span
      className={`group inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-navy-950 transition-colors duration-180 ease-out hover:text-red ${className ?? ""}`}
    >
      {label}
      <svg
        width="16"
        height="8"
        viewBox="0 0 20 10"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-180 ease-out group-hover:translate-x-1"
      >
        <path
          d="M19.3536 5.35355C19.5488 5.15829 19.5488 4.84171 19.3536 4.64645L16.1716 1.46447C15.9763 1.2692 15.6597 1.2692 15.4645 1.46447C15.2692 1.65973 15.2692 1.97631 15.4645 2.17157L18.2929 5L15.4645 7.82843C15.2692 8.02369 15.2692 8.34027 15.4645 8.53553C15.6597 8.7308 15.9763 8.7308 16.1716 8.53553L19.3536 5.35355ZM0 5.5H19V4.5H0V5.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
