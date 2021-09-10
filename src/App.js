import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Term from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Offers from './pages/Offers';
import MyTrip from './pages/MyTrip';
import FormRedirect from './pages/FormRedirect';

function App() {
  const [menuLists] = useState([
    {
      //link: "https://www.vivancetravels.com/general/index/flights?default_view=VHCID1420613784",
      link: '/form/?formview=FLIGHTS',
      label: "flights"
    },
    {
      //link: "https://www.vivancetravels.com/general/index/flights?default_view=VHCID1420613784",
      link: '/form/?formview=HOTELS',
      label: "hotels"
    },
    {
      //link: "https://www.vivancetravels.com/general/index/buses?default_view=VHCID1433498307",
      link: '/form/?formview=BUSES',
      label: "buses"
    },
    {
      //link: "https://www.vivancetravels.com/general/index/transfers?default_view=TMVIATID1527240212",
      link: '/form/?formview=TRANSFERS',
      label: "transfers"
    },
    {
      //link: "https://www.vivancetravels.com/general/index/activities?default_view=TMCID1524458882",
      link: '/form/?formview=ACTIVITIES',
      label: "activities"
    },
    {
      //link: "https://www.vivancetravels.com/general/index/holidays?default_view=VHCID1433498322",
      link: '/form/?formview=HOLIDAYS',
      label: "holidays"
    },
    {
      //link: "https://www.vivancetravels.com/index.php/general/my_booking",
      link: "/mytrip",
      label: "my trip"
    },
  ]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Home menuLists={menuLists} />)} />
        <Route path="/mytrip" render={() => (<MyTrip menuLists={menuLists} />)} />
        <Route path="/aboutus" render={() => (<AboutUs menuLists={menuLists} />)} />
        <Route path="/offers" render={() => <Offers menuLists={menuLists} />} />
        <Route path="/faq" render={() => <Faq menuLists={menuLists} />} />
        <Route path="/termsandconditions" render={() => (<Term menuLists={menuLists} />)} />
        <Route path="/privacypolicy" render={() => (<PrivacyPolicy menuLists={menuLists} />)} />
        <Route path="/form" render={() => (<FormRedirect />)} />
      </Switch>
    </Router>
  );
}

export default App;