import Image from "next/image";

type LogoProps = {
  className?: string;
  tone?: "brand" | "white";
};

export function Logo({ className, tone = "brand" }: LogoProps) {
  return (
    <Image
      src="/logo-long.svg"
      alt="Екатерина Еремина"
      width={1752}
      height={479}
      priority
      className={`transition-[filter] duration-300 ease-out ${tone === "white" ? "brightness-0 invert" : ""} ${className ?? ""}`}
    />
  );
}
