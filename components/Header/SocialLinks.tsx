const socials = [
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M21.5 4.5L2.5 12.1L8.5 14.1M21.5 4.5L18.9 20.3C18.8 20.9 18.1 21.2 17.6 20.9L12.3 17M21.5 4.5L8.5 14.1M8.5 14.1V19.3C8.5 19.9 9.2 20.1 9.6 19.7L12.3 17M8.5 14.1L12.3 17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "VK",
    href: "#",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M13.2 17.4C7.5 17.4 4.2 13.5 4 6.9H6.9C7 11.7 9.1 13.7 10.7 14.1V6.9H13.5V10.9C15.1 10.7 16.8 8.9 17.3 6.9H20.1C19.7 9.3 17.9 11.1 16.6 11.9C17.9 12.5 20 14.1 20.7 17.4H17.6C17 15.5 15.5 14 13.5 13.8V17.4H13.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M22 12C22 12 22 8.8 21.6 7.3C21.4 6.5 20.7 5.8 19.9 5.6C18.4 5.2 12 5.2 12 5.2C12 5.2 5.6 5.2 4.1 5.6C3.3 5.8 2.6 6.5 2.4 7.3C2 8.8 2 12 2 12C2 12 2 15.2 2.4 16.7C2.6 17.5 3.3 18.1 4.1 18.3C5.6 18.7 12 18.7 12 18.7C12 18.7 18.4 18.7 19.9 18.3C20.7 18.1 21.4 17.5 21.6 16.7C22 15.2 22 12 22 12Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M10 9.3L15 12L10 14.7V9.3Z" fill="currentColor" />
      </svg>
    ),
  },
];

export function SocialLinks() {
  return (
    <ul className="hidden items-center gap-[17px] lg:flex">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            aria-label={social.label}
            className="flex items-center justify-center text-muted transition-colors duration-180 ease-out hover:text-text"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
