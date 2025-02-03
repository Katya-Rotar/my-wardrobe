import "./globals.css";
import Header from "./components/header";
import CustomCalendar from "./components/customCalendar";
import WeatherWidget from "./components/weatherWidget";
import UserProfile from "./components/userProfile";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <br></br>
        <CustomCalendar />
        <br></br>
        <WeatherWidget />
        <br></br>
        <UserProfile />
        {children}
      </body>
    </html>
  );
}
