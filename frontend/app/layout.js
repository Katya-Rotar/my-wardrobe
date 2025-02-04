import "./globals.css";
import Header from "./components/header";
import CustomCalendar from "./components/customCalendar";
import WeatherWidget from "./components/weatherWidget";
import UserProfile from "./components/userProfile";
import SearchBar from "./components/searchBar";

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
        <br></br>
        <SearchBar/>
        {children}
      </body>
    </html>
  );
}
