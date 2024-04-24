import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "صرافی ارز دیجیتال بیتمکس",
  description: "خرید، فروش، ترید و سرمایه گذاری ارز دیجیتال",
  icons: {
    icon: ["/cryptoicon.png?v=4"],
    apple: ["/cryptoicon.png?v=4"],
    shortcut: ["/cryptoicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
