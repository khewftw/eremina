import type { Metadata } from "next";
import { Onest, Marck_Script } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const marckScript = Marck_Script({
  variable: "--font-marck-script",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Екатерина Еремина",
  description: "Время работать на результат",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${onest.variable} ${marckScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
