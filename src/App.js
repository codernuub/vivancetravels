import React, { useState } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Term from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [menuLists] = useState([
    {
      link: "https://www.vivancetravels.com/general/index/flights?default_view=VHCID1420613784",
      label: "flights"
    },
    {
      link: "https://www.vivancetravels.com/general/index/flights?default_view=VHCID1420613784",
      label: "hotels"
    },
    {
      link: "https://www.vivancetravels.com/general/index/buses?default_view=VHCID1433498307",
      label: "buses"
    },
    {
      link: "https://www.vivancetravels.com/general/index/transfers?default_view=TMVIATID1527240212",
      label: "transfers"
    },
    {
      link: "https://www.vivancetravels.com/general/index/activities?default_view=TMCID1524458882",
      label: "activities"
    },
    {
      link: "https://www.vivancetravels.com/general/index/holidays?default_view=VHCID1433498322",
      label: "holidays"
    },
    {
      link: "https://www.vivancetravels.com/index.php/general/my_booking",
      label: "my trip"
    },
  ]);

  return (
    <div className="app">
      <PrivacyPolicy menuLists={menuLists} />
    </div>
  );
}

export default App;