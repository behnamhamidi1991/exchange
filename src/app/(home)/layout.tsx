import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Crypto Exchange | Bitcoin Exchange | Crypto Trade",
  description: "Buy, sell, trade and invest cryptocurrencies",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
