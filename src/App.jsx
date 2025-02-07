import TopBar from "../components/TopBar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import UpperSection from "../components/UpperSection";
// import SettingsPage from "../components/SettingsPage";                         //settings page
// import ProfilePage from "../components/ProfilePage";
// import TopBarProfilePage from "../components/TopBarProfilePage";

import "./App.css";

function App() {
  return (
    <>
      <TopBar src="../netflix_logo.png" width="100px" height="55px" />
      <UpperSection></UpperSection>
      <Cards title="My Hero Academia" searchQuery="hero+academia"></Cards>
      <Cards title="Attack On Titan" searchQuery="Attack+On+Titan"></Cards>
      <Cards title="Avengers" searchQuery="avengers"></Cards>
      <Footer></Footer>
      {/* <SettingsPage
        email="student@gmail.com"
        phone="333942312"                                                                       {//settings page}
        paypal="mariorossi@gmail.com" 
        accountVersion="Premium"
        profilePic="../avatar.png"
      ></SettingsPage> */}
      {/* <TopBarProfilePage ></TopBarProfilePage>
      <ProfilePage></ProfilePage> */}
    </>
  );
}

export default App;
