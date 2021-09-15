import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Term from './pages/Terms';
import Fare from './pages/Fare';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Offers from './pages/Offers';
import MyTrip from './pages/MyTrip';
import FormRedirect from './pages/FormRedirect';
import FormModal from './modals/FormModal';

function App() {
  const [menuLists] = useState([
    {
      link: '/form/?formview=FLIGHTS',
      label: "flights"
    },
    {
      link: '/form/?formview=HOTELS',
      label: "hotels"
    },
    {
      link: '/form/?formview=BUSES',
      label: "buses"
    },
    {
      link: '/form/?formview=TRANSFERS',
      label: "transfers"
    },
    {
      link: '/form/?formview=ACTIVITIES',
      label: "activities"
    },
    {
      link: '/form/?formview=HOLIDAYS',
      label: "holidays"
    },
    {
      link: "/mytrip",
      label: "my trip"
    }
  ]);
  //change form
  const [form, setForm] = useState('signIn');
  const changeForm = (formType) => setForm(formType)
  return (
    <>
      <Router>
        <Header menuLists={menuLists} changeForm={changeForm}/>
        <Switch>
          <Route exact path="/" render={() => (<Home menuLists={menuLists} changeForm={changeForm} />)} />
          <Route path="/mytrip" render={() => (<MyTrip menuLists={menuLists} changeForm={changeForm} />)} />
          <Route path="/farecalendar" render={() => (<Fare menuLists={menuLists} changeForm={changeForm} />)} />
          <Route path="/aboutus" render={() => (<AboutUs menuLists={menuLists} changeForm={changeForm}/>)} />
          <Route path="/offers" render={() => <Offers menuLists={menuLists} changeForm={changeForm}/>} />
          <Route path="/faq" render={() => <Faq menuLists={menuLists} />} changeForm={changeForm}/>
          <Route path="/termsandconditions" render={() => (<Term menuLists={menuLists} changeForm={changeForm}/>)} />
          <Route path="/privacypolicy" render={() => (<PrivacyPolicy menuLists={menuLists} changeForm={changeForm}/>)} />
          <Route path="/form" render={() => (<FormRedirect />)} />
        </Switch>
        <Footer menuLists={menuLists} changeForm={changeForm}/>
      </Router>
      <FormModal changeForm={changeForm} form={form} />
    </>
  );
}

export default App;