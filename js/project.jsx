
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
         Route,
         Link,
         IndexLink,
         IndexRoute,
         hashHistory
       } from 'react-router';
import GoogleMapReact from 'google-map-react';
import { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import classNames from 'classnames';

import Invest from './components/invest.jsx';
import Locations from './components/locations.jsx';
import OfferFlats from './components/offerFlats.jsx';
import Gallery from './components/gallery.jsx';
import Contact from './components/contact.jsx';
import Finance from './components/finance.jsx';
import Footer from './components/footer.jsx';


/* ------ NAV Scroll to Sections ------ */
class SectionNav extends React.Component {
  componentDidMount() {
    scrollToComponent(this.SliderHome);
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
		var value = document.body.scrollTop;

		var sliderHomeH = document.querySelector(".sliderHome");
			sliderHomeH = sliderHomeH.offsetTop;

		var investH = document.querySelector(".invest");
			investH = investH.offsetTop -1;

		var locationsH = document.querySelector(".locations");
			locationsH = locationsH.offsetTop -1;

		var offerFlatsH = document.querySelector(".offerFlats");
			offerFlatsH = offerFlatsH.offsetTop -1;

		var galleryH = document.querySelector(".gallery");
			galleryH = galleryH.offsetTop -1;

		var financeH = document.querySelector(".finance");
			financeH = financeH.offsetTop -1;

		var contactH = document.querySelector(".contact");
			contactH = contactH.offsetTop -1;

			value > investH && value < locationsH
				? document.querySelector(".investLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".investLi").style.backgroundColor = "white"
			value > locationsH && value < offerFlatsH
				? document.querySelector(".locationsLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".locationsLi").style.backgroundColor = "white"
			value > offerFlatsH && value < galleryH
				? document.querySelector(".offerFlatsLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".offerFlatsLi").style.backgroundColor = "white"
			value > galleryH && value < financeH
				? document.querySelector(".galleryLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".galleryLi").style.backgroundColor = "white"
			value > financeH && value < contactH
				? document.querySelector(".financeLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".financeLi").style.backgroundColor = "white"
			value > contactH
				? document.querySelector(".contactLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".contactLi").style.backgroundColor = "white"
  }
  render() {
    return (
      <div>
        <div>
          <nav className='nav'>
            <ul className=' navList'>
              <li className='sliderHome col-sm-4 col-md-2 col-lg-2'
                onClick={() => scrollToComponent(this.SliderHome, { align: 'middle',ease:'inCirc', duration: 1000})}>
              </li>
              <li>
                <IndexLink  to="/invest"
                className='investLi decoration hover paddingTop col-sm-4 col-md-2 col-lg-2'
                onClick={() => scrollToComponent(this.Invest, {align: 'middle',ease:'inCirc',  duration: 1000})}>INVESTMENT</IndexLink>
              </li>
              <li>
								<IndexLink  to="/locations"
								className='locationsLi decoration hover col-sm-4 col-md-2 col-lg-2'
								onClick={() => scrollToComponent(this.Locations, {align: 'middle', ease:'inCirc', duration: 1000})}>LOCATION</IndexLink>
							</li>
              <li>
								<IndexLink  to="/offerFlats"
								className='offerFlatsLi decoration hover col-sm-4 col-md-2 col-lg-2'
								onClick={() => scrollToComponent(this.OfferFlats, {align: 'middle', ease:'inCirc', duration: 1000})}>FLAT</IndexLink>
							</li>
              <li>
                <IndexLink  to="/finance"
                className='financeLi decoration hover col-sm-4 col-md-2 col-lg-2'
                onClick={() => scrollToComponent(this.Finance, { align: 'middle',ease:'inCirc', duration: 1000})}>FINANCE</IndexLink>
              </li>
              <li>
								<IndexLink  to="/gallery"
								className='galleryLi decoration hover col-sm-4 col-md-2 col-lg-2'
								onClick={() => scrollToComponent(this.Gallery, { align: 'middle',ease:'inCirc', duration: 1000})}>GALLERY</IndexLink>
							</li>
              <li>
                <IndexLink  to="/contact"
                className='contactLi decoration hover col-sm-4  col-md-2 col-lg-2'
                onClick={() => scrollToComponent(this.Contact, {align: 'middle',ease:'inCirc',  duration: 1000})}>CONTACT</IndexLink>
              </li>
            </ul>
          </nav>


          <div className="mainFloatRight">
            <section  className='sliderHome'
							ref={(section) => { this.SliderHome = section; }}><SliderHome/></section>
            <section  className='invest'
							ref={(section) => { this.Invest = section; }}><Invest/></section>
            <section  className='locations'
							ref={(section) => { this.Locations = section; }}><Locations/></section>
            <section  className='offerFlats'
							ref={(section) => { this.OfferFlats = section; }}><OfferFlats/></section>
            <section  className='finance'
							ref={(section) => { this.Finance = section; }}><Finance/></section>
            <section  className='gallery'
  						ref={(section) => { this.Gallery = section; }}><Gallery/></section>
            <section  className='contact'
							ref={(section) => { this.Contact = section; }}><Contact/></section>
						<Footer />
          </div>
        </div>
      </div>)
  }
}


/* ------ MAIN Sections ------ */
class SliderHome extends React.Component {
  render() {
    return (
      <div className="sliderHome">
      </div>);
    }
  }

class NotFound extends React.Component {
  render() {
  return <h1>404,Nothing is here</h1>;
  }
}

/* ------ RENDER ------ */
class NavMainRouter extends React.Component {
  render() {
  return <Router history={hashHistory}>
      <Route path='/' component={SectionNav}>
        <IndexRoute component={Invest} />
        <Route path='/locations' component={Locations} />
        <Route path='/offerFlats' component={OfferFlats} />
        <Route path='/kolekcje' component={Gallery} />
        <Route path='/finance' component={Finance} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound}/>
      </Route>
  </Router>
  }
}
class Content extends React.Component {
  render() {
  return (
    <NavMainRouter/>
  )}
}
class App extends React.Component {
  render() {
    return(<div>
        <Content/>
      </div>)
    }
  }
ReactDOM.render(
  <App />,
  document.getElementById('app')
  );
