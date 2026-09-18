import { SectionContainer } from "@/components/ui/SectionContainer";
import { MicroTagline } from "@/components/ui/MicroTagline";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";

const navLinks = [
  { label: "Направления", href: "/#directions" },
  { label: "Опыт", href: "/#experience" },
  { label: "О Екатерине", href: "/#about" },
  { label: "Команда", href: "/#team" },
  { label: "Новости", href: "/#news" },
];

const materialLinks = [
  { label: "Все новости", href: "/news" },
  { label: "Профессиональный опыт", href: "/experience" },
  { label: "Команда", href: "/team" },
];

const contactLinks = [
  { label: "Пресс-центр", href: "/news" },
  { label: "Обратная связь", href: "#footer-contacts" },
];

const socials = [
  {
    label: "Telegram",
    href: "#",
    icon: (
      <path
        d="M21.5 4.5L2.5 12.1L8.5 14.1M21.5 4.5L18.9 20.3C18.8 20.9 18.1 21.2 17.6 20.9L12.3 17M21.5 4.5L8.5 14.1M8.5 14.1V19.3C8.5 19.9 9.2 20.1 9.6 19.7L12.3 17M8.5 14.1L12.3 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "VK",
    href: "#",
    icon: (
      <path
        d="M13.2 17.4C7.5 17.4 4.2 13.5 4 6.9H6.9C7 11.7 9.1 13.7 10.7 14.1V6.9H13.5V10.9C15.1 10.7 16.8 8.9 17.3 6.9H20.1C19.7 9.3 17.9 11.1 16.6 11.9C17.9 12.5 20 14.1 20.7 17.4H17.6C17 15.5 15.5 14 13.5 13.8V17.4H13.2Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <>
        <path
          d="M22 12C22 12 22 8.8 21.6 7.3C21.4 6.5 20.7 5.8 19.9 5.6C18.4 5.2 12 5.2 12 5.2C12 5.2 5.6 5.2 4.1 5.6C3.3 5.8 2.6 6.5 2.4 7.3C2 8.8 2 12 2 12C2 12 2 15.2 2.4 16.7C2.6 17.5 3.3 18.1 4.1 18.3C5.6 18.7 12 18.7 12 18.7C12 18.7 18.4 18.7 19.9 18.3C20.7 18.1 21.4 17.5 21.6 16.7C22 15.2 22 12 22 12Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M10 9.3L15 12L10 14.7V9.3Z" fill="currentColor" />
      </>
    ),
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
        {title}
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[14px] font-semibold text-white/75 transition-colors duration-180 ease-out hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer-contacts" className="bg-navy-950 text-white">
      <div aria-hidden="true" className="h-1 w-full bg-red" />

      <SectionContainer className="py-20 md:py-28">
        <RevealGroup className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto] md:gap-12" y={24}>
          <div>
            <p className="font-sans text-[34px] font-extrabold uppercase tracking-[-0.02em] text-white md:text-[48px] xl:text-[56px]">
              Екатерина Еремина
            </p>
            <MicroTagline
              items={[
                "Транспорт",
                "Логистика",
                "Международное сотрудничество",
                "Образование",
              ]}
              tone="white"
              className="mt-4"
            />

            <ul className="mt-8 flex items-center gap-5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/70 transition-colors duration-180 ease-out hover:border-red hover:text-white"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 md:flex md:gap-16">
            <FooterColumn title="Навигация" links={navLinks} />
            <FooterColumn title="Материалы" links={materialLinks} />
            <FooterColumn title="Контакты" links={contactLinks} />
          </div>
        </RevealGroup>

        <Reveal y={16} className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:mt-20 md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="text-[12px] text-white/50">
            © {year} Екатерина Еремина. Все права защищены.
          </p>
          <p className="max-w-[560px] text-[12px] leading-relaxed text-white/50">
            Персональный информационный ресурс Екатерины Ереминой. Не
            является официальным сайтом Администрации Президента Российской
            Федерации или иного государственного органа.
          </p>
        </Reveal>
      </SectionContainer>
    </footer>
  );
}
