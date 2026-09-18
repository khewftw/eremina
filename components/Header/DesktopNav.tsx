const leftLinks = [
  { label: "НАПРАВЛЕНИЯ", href: "/#directions" },
  { label: "ОПЫТ", href: "/#experience" },
  { label: "О ЕКАТЕРИНЕ", href: "/#about" },
];

const rightLinks = [
  { label: "КОМАНДА", href: "/#team" },
  { label: "ПРЕСС-ЦЕНТР", href: "/news" },
  { label: "КОНТАКТЫ", href: "/#footer-contacts" },
];

export function DesktopNavLeft() {
  return (
    <ul className="hidden items-center gap-9 md:flex">
      {leftLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="block text-[13px] font-semibold leading-none tracking-[0.01em] text-text transition-colors duration-180 ease-out hover:text-red"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function DesktopNavRight() {
  return (
    <ul className="hidden items-center gap-9 md:flex">
      {rightLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-[13px] font-semibold leading-none tracking-[0.01em] text-text transition-colors duration-180 ease-out hover:text-red"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function HeaderUtilityIcons() {
  return (
    <div className="hidden items-center md:flex">
      <button
        type="button"
        aria-label="Поиск"
        className="text-text transition-colors duration-180 ease-out hover:text-red"
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M21 21L16.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
