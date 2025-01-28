import "./globals.css";
import WeatherWidget from "./components/WeatherWidget";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WeatherWidget />
        {children}
      </body>
    </html>
  );
}
