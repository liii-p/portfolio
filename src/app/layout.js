import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Lianna Pyman Portfolio",
  description: "Lianna Pyman - Software Engineer - Portfolio",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Rubik:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/portfolio/logo192.png" />
        <link rel="manifest" href="/portfolio/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
