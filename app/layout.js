import "./globals.css";

export const metadata = {
  title: "Lazuardy",
  description: "Become a Lazuardy Partner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
