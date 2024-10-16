import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Lazuardy",
  description: "Become a Lazuardy Partner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
