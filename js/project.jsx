
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

import Locations from './components/locations.jsx';
import OfferFlats from './components/offerFlats.jsx';
import Gallery from './components/gallery.jsx';
import Contact from './components/contact.jsx';
import Storey from './components/storey.jsx';
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

		var storeyH = document.querySelector(".storey");
			storeyH = storeyH.offsetTop -1;

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
			value > galleryH && value < storeyH
				? document.querySelector(".galleryLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".galleryLi").style.backgroundColor = "white"
			value > storeyH && value < contactH
				? document.querySelector(".storeyLi").style.backgroundColor = "#f7f7f7"
				: document.querySelector(".storeyLi").style.backgroundColor = "white"
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
              <li className='sliderHome col-sm-4  col-md-2 col-lg-2'
                onClick={() => scrollToComponent(this.SliderHome, { align: 'middle',ease:'inCirc', duration: 1000})}>
              </li>
              <li>
                <IndexLink  to="/contact"
                className='contactLi decoration hover col-sm-4  col-md-2 col-lg-2'
                onClick={() => scrollToComponent(this.Contact, {align: 'middle',ease:'inCirc',  duration: 1000})}>CONTACT</IndexLink>
              </li>
              <li>
								<IndexLink  to="/gallery"
								className='galleryLi decoration hover col-sm-4 col-md-2 col-lg-2'
								onClick={() => scrollToComponent(this.Gallery, { align: 'middle',ease:'inCirc', duration: 1000})}>GALLERY</IndexLink>
							</li>
              <li>
                <IndexLink  to="/storey"
                className='storeyLi decoration hover col-sm-4 col-md-2 col-lg-2'
                onClick={() => scrollToComponent(this.Storey, { align: 'middle',ease:'inCirc', duration: 1000})}>FLOOR</IndexLink>
              </li>
              <li>
								<IndexLink  to="/offerFlats"
								className='offerFlatsLi decoration hover col-sm-4 col-md-2 col-lg-2'
								onClick={() => scrollToComponent(this.OfferFlats, {align: 'middle', ease:'inCirc', duration: 1000})}>FLAT</IndexLink>
							</li>
              <li>
								<IndexLink  to="/locations"
								className='locationsLi decoration hover col-sm-4 col-md-2 col-lg-2'
								onClick={() => scrollToComponent(this.Locations, {align: 'middle', ease:'inCirc', duration: 1000})}>LOCATION</IndexLink>
							</li>
              <li>
								<IndexLink  to="/invest"
								className='investLi decoration hover paddingTop col-sm-4 col-md-2 col-lg-2'
								onClick={() => scrollToComponent(this.Invest, {align: 'middle',ease:'inCirc',  duration: 1000})}>INVESTMENT</IndexLink>
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
            <section  className='storey'
							ref={(section) => { this.Storey = section; }}><Storey/></section>
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

class Invest extends React.Component {
  render() {
  return (
      <div className="invest">
          <article>
            <h1>NEO COMPANY BLOCK co.</h1>
          </article>
          <img src="./photos/top-slide-01.jpg" className="video-background"/>
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
        <Route path='/storey' component={Storey} />
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





// class Template extends React.Component {
//    render() {
//        return (<div className="top">
//                     <div className="row large light-grey">
//                       <div className="col-sm-6 col-md-4 col-lg-2">
//                         <Link to="/invest" className="button block">INVESTMENT</Link>
//                       </div>
//                       <div className="col-sm-6 col-md-4 col-lg-2">
//                         <Link to="/location" className="button block">LOCATION</Link>
//                       </div>
//                       <div className="col-sm-6 col-md-4 col-lg-2">
//                         <Link to="/offerFlats" className="button block">FIND A FLAT</Link>
//                       </div>
//                       <div className="col-sm-6 col-md-4 col-lg-2">
//                         <Link to="/storey" className="button block">FIND THE FLOOR</Link>
//                       </div>
//                       <div className="col-sm-6 col-md-4 col-lg-2">
//                         <Link to="/gallery" className="button block">GALLERY</Link>
//                       </div>
//
//                       <div className="col-sm-6 col-md-4 col-lg-2">
//                         <Link to="/contact" className="button block">CONTACT</Link>
//                       </div>
//                     </div>
//
//                    <div className='page'>
//                       <div className='logo'></div>
//                       {this.props.children}
//                    </div>
//     </div>);
//    }
//  }
//
// ///////////////////// INVESTMENT (SLIDER IMAGE )////////////////////////////////
// class SlideOne extends React.Component {
// render(){
//
//   let background1 = {
//     backgroundImage: 'url(photos/top-slide-01.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   }
//
//   return (<div className="slide_One"><h1 style={{zIndex:1, color:'#b91581'}}>Last free flats!!</h1></div>)
//   }
// }
//
// class SlideTwo extends React.Component{
// render(){
//
//   let background = {
//     backgroundImage: 'url(photos/top-slide-02.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//
//   }
//
//   return (<div className="slide_Two"><h1 style={{zIndex:1, color:'#b91581'}}>Enjoy your dream flat at a very attractive price!</h1></div>)
//   }
// }
//
// class SlideThree extends React.Component{
// render(){
//
//   let background = {
//     backgroundImage: 'url(photos/top-slide-03.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//
//   }
//
//   return (<div className="slide_Three"><h1 style={{zIndex:1, color:'#f1f5f5'}}>Add your story!</h1></div>)
//   }
// }
//
//
// class RightArrow extends React.Component {
//   render(){
//
//     return (
//       <div onClick={this.props.nextSlide} className="nextArrow">
//       </div>
//     );
//   }
// }
//
// /* Pretend these are in their own separate files */
//
// class LeftArrow extends React.Component {
//   render(){
//     return (
//       <div onClick={this.props.previousSlide} className="backArrow">
//       </div>
//     );
//   }
// }
//
// export default class Invest extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       slideCount: 1
//     }
//
//     this.nextSlide = this.nextSlide.bind(this);
//     this.previousSlide = this.previousSlide.bind(this);
//   }
//
//   render() {
//    console.log(this.state.slideCount);
//
//     return (<div>
//         <hr></hr>
//         <h3>It is here that a unique housing project is created,
//         consisting of 20 functional apartments with a two-storey underground garage.
//         However, the building itself is not all. The investment is part of the
//         city-garden concept implemented in this area. After all, it is not just
//         to live beautifully, but simply to be together, and this is conducive
//         to the closeness of nature and the climate of the Białołęka district.</h3>
//
//         <div className="slider">
//
//           { this.state.slideCount === 1 ? <SlideOne /> : null }
//           { this.state.slideCount === 2 ? <SlideTwo /> : null }
//           { this.state.slideCount === 3 ? <SlideThree /> : null }
//
//           <RightArrow nextSlide={this.nextSlide} />
//           <LeftArrow previousSlide={this.previousSlide} />
//
//         </div>
//       </div>
//     );
//   }
//
// 	// I have ocd sometimes and put my functions below the JSX. You can put them above if you'd like.
//   nextSlide() {
//     if(this.state.slideCount < 3){
//       this.setState({ slideCount: this.state.slideCount + 1 })
//     }
//     else{
//       this.setState({ slideCount: 1})
//     }
//   }
//
//   previousSlide() {
//     if(this.state.slideCount > 1){
//       this.setState({ slideCount: this.state.slideCount - 1 })
//     }
//     else{
//       this.setState({ slideCount: 3 })
//     }
//   }
// }
//
// ///////////////////// lOCALIZATION ////////////////////////////////
//
// class List extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return(<ul className="list__ul">
//       {this.props.lists.map((param, index) =>{
//         return <li className="list__li" key={index}>{param.text}</li>
//       })}
//     </ul>)
//   }
// }
//
//
// class AnyReactComponent extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   handleClick = (e) =>{
//     // console.log(this.props.text);
//     this.props.clickFunction(e)
//   }
//
//   render () {
//     return(<div>
//       <img src={this.props.img_src} className="YOUR-CLASS-NAME" data-lat={this.props.lat} data-color={this.props.color}
//             onClick={this.handleClick}/><b style={{visibility: this.props.windows }}>{this.props.text}</b>
//       </div>)
//     }
//   }
//
// class Locations extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         markers: [],
//         markersList: [],
//     }
//   }
//
//   componentDidMount(){
//     // or you can set markers list somewhere else
//     // please also set your correct lat & lng
//     // you may only use 1 image for all markers, if then, remove the img_src attribute ^^
//     this.setState({
//       markers: [{lat: 52.32181907768039, lng: 20.948610305786133, img_src: 'photos/Markers/yellow_MarkerA.png', text: 'A: Primary school nr.344', windows : 'hidden', color: 'yellow'},
//                 {lat: 52.327675, lng: 20.944563099999982, img_src: 'photos/Markers/yellow_MarkerB.png', text: 'B: Kindergarten nr.226', windows : 'hidden', color: 'yellow'},
//                 {lat: 52.328188, lng: 20.945760000000064, img_src: 'photos/Markers/yellow_MarkerC.png', text: 'C: Nursery nr.36', windows : 'hidden', color: 'yellow'},
//                 {lat: 52.3209503, lng: 20.94310500000006, img_src: 'photos/Markers/yellow_MarkerD.png', text: 'D: Batern country', windows : 'hidden', color: 'yellow'},
//                 {lat: 52.3298739, lng: 20.950973999999974, img_src: 'photos/Markers/yellow_MarkerE.png', text: 'E: Fairy land', windows : 'hidden', color: 'yellow'},
//
//                 {lat: 52.326454, lng: 20.950946899999963, img_src: 'photos/Markers/blue_MarkerA.png', text: 'A: Żabka', windows : 'hidden', color: 'blue'},
//                 {lat: 52.325912, lng: 20.94531489999997, img_src: 'photos/Markers/blue_MarkerB.png', text: 'B: M&L Delikatesy', windows : 'hidden', color: 'blue'},
//                 {lat: 52.3222018, lng: 20.95015539999997, img_src: 'photos/Markers/blue_MarkerC.png', text: 'C: DH Tarchomin', windows : 'hidden', color: 'blue'},
//                 {lat: 52.32268939999999, lng: 20.94270670000003, img_src: 'photos/Markers/blue_MarkerD.png', text: 'D: Żabka', windows : 'hidden', color: 'blue'},
//                 {lat: 52.327899, lng: 20.943962499999998, img_src: 'photos/Markers/blue_MarkerE.png', text: 'E: Sklep ABC', windows : 'hidden', color: 'blue'},
//
//                 {lat: 52.3262, lng: 20.94945000000007, img_src: 'photos/Markers/pink_MarkerA.png', text: 'A: Talarowa 01', windows : 'hidden', color: 'pink'},
//                 {lat: 52.32417, lng: 20.946270000000027, img_src: 'photos/Markers/pink_MarkerB.png', text: 'B: Erazma z Zakroczymia 01', windows : 'hidden', color: 'pink'},
//                 {lat: 52.32489, lng: 20.94759010000007, img_src: 'photos/Markers/pink_MarkerC.png', text: 'C: Erazma z Zakroczymia 02', windows : 'hidden', color: 'pink'},
//                 {lat: 52.32283, lng: 20.944790000000012, img_src: 'photos/Markers/pink_MarkerD.png', text: 'D: Mehoffera 04', windows : 'hidden', color: 'pink'},
//                 {lat: 52.32281256416483, lng: 20.94393253326416, img_src: 'photos/Markers/pink_MarkerE.png', text: 'E: Mehoffera 05', windows : 'hidden', color: 'pink'},
//
//                 {lat: 52.3251735, lng: 20.945689600000037, img_src: 'photos/Markers/red_MarkerA.png', text: 'A: Medicover', windows : 'hidden', color: 'red'},
//                 {lat: 52.321751, lng: 20.948411899999996, img_src: 'photos/Markers/red_MarkerB.png', text: 'B: dr n. med. Dorota Kapiszewska-Dzedzej', windows : 'hidden', color: 'red'},
//                 {lat: 52.3269005, lng: 20.942221000000018, img_src: 'photos/Markers/red_MarkerC.png', text: 'C: lek. med. Trojanowski Piotr', windows : 'hidden', color: 'red'},
//                 {lat: 52.3283427, lng: 20.949323999999933, img_src: 'photos/Markers/red_MarkerD.png', text: 'D: Dentica Stomatologia Rodzinna Dorota Giza-Padzińska', windows : 'hidden', color: 'red'},
//                 {lat: 52.319041, lng: 20.957176900000036, img_src: 'photos/Markers/red_MarkerE.png', text: 'E: LUX MED', windows : 'hidden', color: 'red'},
//
//
//                 {lat: 52.3253636, lng: 20.949414700000034,  img_src: 'photos/family_files/marker-cat-7.png', text: 'It is here', windows: 'hidden', color: 'brown'}],
//     });
//   }
//
//     handleClickWindows = (e) =>{
//       let newMarkers = this.state.markers
//       let listMarkers = this.state.markersList
//
//       for (let i = 0; i < newMarkers.length; i++) {
//
//         if(newMarkers[i].lat===Number(e.target.getAttribute('data-lat'))) {
//           newMarkers[i].windows==='hidden' ? newMarkers[i].windows='visible' : newMarkers[i].windows='hidden';
//         }
//       }
//       listMarkers = [];
//       for (let i = 0; i < newMarkers.length; i++) {
//         if(e.target.getAttribute('data-color') === newMarkers[i].color){
//           listMarkers.push(newMarkers[i])
//         }
//       }
//
//       this.setState({
//         markers: newMarkers,
//         markersList: listMarkers
//       })
//     }
//
//   render() {
//     return (<div>
//       <hr></hr>
//       <h3>Near the investment of Nove Stare Italy there are schools and kindergartens,
//       health centers and service and retail outlets. There are network stores and
//       numerous local shops waiting for you. There are also a bank, post office,
//       restaurant, sushi bar and pizzeria. The beautiful parks are popular for walks.</h3>
//       <ul className='boxs'>
//         <li className='boxYellow col-sm-12 col-md-6 col-lg-3'>Education</li>
//         <li className='boxBlue col-sm-12 col-md-6 col-lg-3'>Shops</li>
//         <li className='boxPink col-sm-12 col-md-6 col-lg-3'>Comunication</li>
//         <li className='boxRed col-sm-12 col-md-6 col-lg-3'>Helthy</li>
//       </ul>
//       <div style={{position: 'relative'}}><List
//       lists={this.state.markersList}/></div>
//
//       <div style={{position:'relative'}}><GoogleMapReact
//         bootstrapURLKeys={{key: "AIzaSyANC6u2qaMm1coCYI1KtOmlJzwV2C8lyA8"}}
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//         style={{height: '500px'}}
//       >
//             {this.state.markers.map((marker, i) =>{
//               return(
//                 <AnyReactComponent
//                   lat={marker.lat}
//                   lng={marker.lng}
//                   img_src={marker.img_src}
//                   text={marker.text}
//                   windows={marker.windows}
//                   clickFunction={this.handleClickWindows}
//                   key={marker.lat}
//                   color={marker.color}
//                 />
//               )
//             })}
//       </GoogleMapReact></div>
//
//     </div>
//     );
//   }
// }
//
// Locations.defaultProps = {
//   center: {lat: 52.3253636, lng: 20.95241470000002},
//   zoom: 15
//
// };
//
// ///////////////////// OFFER FLATS ////////////////////////////////
//
// class OfferFlats extends React.Component {
//   constructor (props) {
//     super(props)
//
//     this.state = {
//       filterFloor: '',
//       available: false,
//       filterRoom: '',
//       filterArea: '0'
//     }
//   }
//
//   changeBox = () => {
//     this.setState({
//       available: (this.state.available ? false : true)
//     });
//   }
//
//   changeFilterFloor = (text) => {
//     this.setState({
//       filterFloor: text
//     });
//   }
//
//   changeFilterRoom = (room) => {
//     this.setState({
//       filterRoom: room
//     });
//   }
//
//   changeFilterArea = (area) => {
//     this.setState({
//       filterArea: area
//     });
//   }
//
//   render() {
//     const flats = [
//          {floor: "4", room: "3", area: "43", available: false},
//          {floor: "2", room: "2", area: "56", available: true},
//          {floor: "2", room: "4", area: "32", available: true},
//          {floor: "1", room: "2", area: "45", available: true},
//          {floor: "2", room: "1", area: "68", available: false},
//          {floor: "3", room: "2", area: "36", available: true},
//          {floor: "1", room: "3", area: "33", available: true},
//          {floor: "2", room: "5", area: "44.5", available: true},
//          {floor: "3", room: "2", area: "62", available: false},
//          {floor: "1", room: "3", area: "35", available: false},
//          {floor: "2", room: "5", area: "44.6", available: true},
//          {floor: "3", room: "2", area: "63", available: false},
//          {floor: "1", room: "3", area: "34", available: false}
//       ];
//     return (<div>
//
//             <SearchBar1 filterF = {this.state.filterFloor} filterR = {this.state.filterRoom}
//                           filterA = {this.state.filterArea} available = {this.state.available}
//                           changeBox = {this.changeBox}
//                           filterFloor = {this.changeFilterFloor} filterRoom = {this.changeFilterRoom}
//                           filterArea = {this.changeFilterArea}/>
//             <CatTable1 flats = { flats } filterF = {this.state.filterFloor} filterR = {this.state.filterRoom}
//                           filterA = {this.state.filterArea} filterAv = {this.state.available}/>
//           </div>)
//   }
// }
//
// class SearchBar1 extends React.Component {
//
//   handlerCheckBox = () => { // rozwiązanie problemu event.target.checked
//     if (typeof this.props.changeBox === 'function') {
//       this.props.changeBox();
//     }
//   }
//
//   handlerSearchFloor  = (event) => {
//     if (typeof this.props.filterFloor === 'function') {
//       this.props.filterFloor(event.target.value);
//     }
//   }
//
//   handlerSearchRoom  = (event) => {
//     if (typeof this.props.filterRoom === 'function') {
//       this.props.filterRoom(event.target.value);
//     }
//   }
//
//   handlerSearchArea  = (event) => {
//     if (typeof this.props.filterArea === 'function') {
//       this.props.filterArea(event.target.value);
//     }
//   }
//
//
//   render() {
//     return (<div >
//            <hr></hr>
//            <h1 className="flats__tr"><b>FIND THE PERFECT FLAT</b></h1>
//            <form className="flats__search">
//               <input className="col-sm-6 col-md-4 col-lg-4" type = 'text' placeholder = "Floor" onChange = {this.handlerSearchFloor}/>
//               <input className="col-sm-6 col-md-4 col-lg-4" type = 'text' placeholder = "Rooms" onChange = {this.handlerSearchRoom}/>
//               <input className="col-sm-6 col-md-4 col-lg-4" type = 'text' placeholder = "Minimum area" onChange = {this.handlerSearchArea}/>
//               <label className="col-sm-6 col-md-12 col-lg-12"><input type = 'checkbox' checked = {this.props.available} onChange = {this.handlerCheckBox}/>
//                 Available</label>
//             </form>
//           </div>)
//   }
// }
//
// class CatTable1 extends React.Component {
//
//   render() {
//
//     let rows = [];
//     let lastCategory = null;
//     let filtersF = this.props.filterF;
//     let filtersR = this.props.filterR;
//     let filtersA = parseInt(this.props.filterA);
//     let checkBox = this.props.filterAv;
//
// console.log(this.props.flats);
//     this.props.flats.forEach(function(flat) {
//
//       let flatArea = parseInt(flat.area);
//
//       if((flat.floor.includes(filtersF)) && (flat.room.includes(filtersR))
//           && (flatArea>filtersA) && ((flat.available === true) || (checkBox === false))){
//         rows.push(<CatRow1 flat = {flat} key={flat.area}/>);
//       }
//       lastCategory = flat.floor;
//     });
//
//     return (<table className="flats">
//             <thead>
//               <tr className="flats__tr">
//                 <th> FLOOR </th>
//                 <th> ROOMS </th>
//                 <th> AREA </th>
//                 <th> AVAILABLE </th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows}
//             </tbody>
//           </table>)
//   }
// }
//
//
// class CatRow1 extends React.Component {
//   render() {
//
//     let open = this.props.flat.available ? "available " : "not available"
//
//     return (<tr>
//             <td>
//               {this.props.flat.floor}
//             </td>
//             <td>
//               {this.props.flat.room}
//             </td>
//             <td>
//               {this.props.flat.area}
//             </td>
//             <td>
//               { open }
//             </td>
//
//           </tr>)
//   }
// }
//
// ///////////////////// GALLERY ////////////////////////////////
// class Gallery extends React.Component {
//  render() {
//
//    const data = [{
//      id: 1,
//      name: "Island",
//      image: "photos/house/img4.jpg"
//    }, {
//      id: 2,
//      name: "Forest",
//      image: "photos/inside.jpg"
//    }, {
//      id: 3,
//      name: "Whale",
//      image: "photos/house/img1.jpg"
//    }, {
//      id: 4,
//      name: "Mountain",
//      image: "photos/top-slide-01.jpg"
//    }, {
//      id: 5,
//      name: "Boat",
//      image: "photos/back2.jpg"
//    }, {
//      id: 6,
//      name: "Flowers",
//      image: "photos/back1.jpg"
//    }, {
//      id: 7,
//      name: "Fire",
//      image: "photos/house/img8.jpg"
//    }, {
//      id: 8,
//      name: "Garden",
//      image: "photos/house/img7.jpg"
//    }, {
//      id: 9,
//      name: "Bridge",
//      image: "photos/house/img5.jpg"
//    }];
//
//
//    // Create tile for each item in data array
//    // Pass data to each tile and assign a key
//    return (<div>
//        <hr></hr>
//        <div className="tiles">
//          {data.map((data) => {
//            return <Tile data={data} key={data.id} />
//          })}
//        </div>
//      </div>
//    );
//  }
// }
//
// class Tile extends React.Component {
//  constructor(props) {
//      super(props);
//      this.state = {
//        open: false,
//        mouseOver: false
//      };
//      // Bind properties to class instance
//      this._clickHandler = this._clickHandler.bind(this);
//      this._mouseEnter = this._mouseEnter.bind(this);
//      this._mouseLeave = this._mouseLeave.bind(this);
//    }
//    // Event handlers to modify state values
//  _mouseEnter(e) {
//    e.preventDefault();
//    if (this.state.mouseOver === false) {
//      console.log(this.props.data.name);
//      this.setState({
//        mouseOver: true
//      })
//    }
//  }
//  _mouseLeave(e) {
//    e.preventDefault();
//    if (this.state.mouseOver === true) {
//      this.setState({
//        mouseOver: false
//      })
//    }
//  }
//  _clickHandler(e) {
//    e.preventDefault();
//    if (this.state.open === false) {
//      this.setState({
//        open: true
//      });
//    } else {
//      this.setState({
//        open: false
//      });
//    }
//  }
//
//  render() {
//    // Modify styles based on state values
//    let tileStyle = {};
//    let headerStyle = {};
//    let zoom = {};
//    // When tile clicked
//    if (this.state.open) {
//      tileStyle = {
//        width: '62vw',
//        height: '62vw',
//        position: 'absolute',
//        top: '50%',
//        left: '50%',
//        margin: '0',
//        marginTop: '-31vw',
//        marginLeft: '-31vw',
//        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
//        transform: 'none'
//      };
//    } else {
//      tileStyle = {
//        width: '18vw',
//        height: '18vw'
//      };
//    }
//
//    return (
//      <div className="tile">
//        <img
//          onMouseEnter={this._mouseEnter}
//          onMouseLeave={this._mouseLeave}
//          onClick={this._clickHandler}
//          src={this.props.data.image}
//          alt={this.props.data.name}
//          style={tileStyle}
//        />
//      </div>
//    );
//  }
// }
//
// ///////////////////// STOREY ////////////////////////////////
//  class Storey extends React.Component {
//    constructor(props) {
//        super(props)
//
//        this.state = {
//            colorFloor:''
//        }
//    }
//
// handleColorChange = () => {
//
//   this.setState({
//       colorFloor: 'green'
//   })
// }
//
//       render() {
//         console.log(this.state.colorFloor);
//           return (<div>
//               <hr></hr>
//                   <h1 className="flats__tr"><b>SEARCH AFTER THE STOREY</b></h1>
//               <div className="image">
//                   <img src="photos/top_942-600.jpg" className="photo__storey" alt="Planets" useMap="#planetmap"
//                   style={{width:"798", height:"508"}}/>
//
//                   <map name="planetmap" id="planetmap">
//                       <area shape="poly"  onMouseEnter={this.handleColorChange} style={{backgroundColor:'red', height: '30px'}} title="floor 3" href="photos/PIETRO_3.jpg"  coords="459,122,792,313,792,340,462,202,0,299,1,249" target="_self"     />
//                       <area shape="poly"  title="floor 2" href="photos/PIETRO_2.jpg"  coords="461,203,791,339,793,369,465,281,3,342,0,298" target="_self"     />
//                       <area shape="poly"  title="floor 1" href="photos/PIETRO_1.jpg"  coords="460,281,789,370,788,401,458,360,2,387,12,342" target="_self"     />
//                       <area shape="poly"  title="floor 0" href="photos/PARTER.jpg"  coords="463,361,787,406,786,441,459,478,3,448,5,383"  target="_self"     />
//                   </map>
//               </div>
//             </div>);
//    }
//  }
//
// ///////////////////// CONTACT ////////////////////////////////
//
// class Contact extends React.Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             name: '',
//             tel: '',
//             mail: '',
//             message: '',
//             messageToRender: '',
//             infoColor: 'green'
//         }
//     }
//
//     handleNameChange = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//
//     handleMailChange = (event) => {
//         this.setState({
//             mail: event.target.value
//         })
//     }
//
//     handleTelChange = (event) => {
//          this.setState({
//             tel: event.target.value
//         })
//     }
//
//     handleMessageChange = (event) => {
//         this.setState({
//             message: event.target.value
//         })
//     }
//
//     handleSubmit = (event) => {
//         event.preventDefault();
//
//         if (this.state.name === ""){
//             this.setState({
//                 messageToRender: "Please enter a valid name!",
//                 infoColor: "red"
//             })
//             return
//         }
//         else if ((this.state.mail.indexOf("@")< 0) || (this.state.mail === "")) {
//             this.setState({
//                 messageToRender: "Please enter a valid email",
//                 infoColor: "red"
//             })
//             return
//         }
//         else if (this.state.message === "") {
//             this.setState({
//                 messageToRender: "Empty message!",
//                 infoColor: "red"
//             })
//              return
//         }
//         this.setState({
//             messageToRender: "Thank you for your message. We will contact you within 24 hours.",
//             infoColor: "green"
//         })
//         return
//     }
//
//     render(){
//         return(<div>
//             <hr></hr>
//             <div className="frame">
//               <div className="col-sm-12 col-md-6 col-lg-6 item">
//                  <h1>PLEASE CONTACT US</h1>
//                  <h3> Sales office in the investment area.</h3>
//                  <p>ul: Mehoffera 32</p>
//                  <p>03-131 Warsow</p>
//                  <p>Tel: +48 565 565 565</p>
//                  <p>E-mail: sold@neo-block.eu</p>
//                  <p>NIP: 525-001-16-22</p>
//                  <p>REGON: 000489805</p>
//               </div>
//               <div className="col-sm-12 col-md-6 col-lg-6">
//                 <h3>Leave your details will contact you.</h3>
//                   <form >
//                       <input onChange={this.handleNameChange} value={this.state.name} className="item__form" placeholder="Name"/>
//                       <input onChange={this.handleTelChange} value={this.state.tel} className="item__form" placeholder="Tel"/>
//                       <input onChange={this.handleMailChange} type="email" className="item__form" placeholder="E-mail"/>
//                       <textarea onChange={this.handleMessageChange} value={this.state.message}
//                                 className="item__form" placeholder="Message"></textarea>
//                       <input type="submit" onClick={this.handleSubmit} value="SEND" className="send"/>
//                   </form>
//
//                   <p style={ {color: this.state.infoColor} }>{this.state.messageToRender}</p>
//               </div>
//             </div>
//             <Footer />
//           </div>
//         )
//     }
// }
//
// class Footer extends React.Component {
//   render() {
//   return (
//     <div className='row relative'>
//       <div>
//         <div className='iconBox'>
//           <IconsFooter />
//         </div>
//       </div>
//   </div>);
//   }
// }
//       class IconsFooter extends React.Component {
//         render() {
//             return (
//               <div>
//                 <a href='https://www.facebook.com' target='_blank' className='iconSocial'><FaFacebookOfficial /></a>
//                 <a href='https://www.instagram.com' target='_blank' className='iconSocial'><FaInstagram /></a>
//                 <p className='textFooter'>Created by Daria Ambroziak-Napora 2017   © Site code protected by law :-) </p>
//
//               </div>)
//         }
//       }
//
//
//  class NotFound extends React.Component {
//       render() {
//             return (<h1>Error</h1>);
//     }
//   }
//
//         class App extends React.Component {
//              render() {
//                return (<div>
//                  <Router history={hashHistory}>
//                      <Route path='/' component={Template}>
//                           <IndexRoute component={Invest} />
//                           <Route path='/invest'component={Invest} />
//                           <Route path='/location'component={Locations} />
//                           <Route path='/offerFlats'component={OfferFlats} />
//                           <Route path='/gallery'component={Gallery} />
//                           <Route path='/storey'component={Storey} />
//                           <Route path='/contact'component={Contact} />
//                           <Route path='*'component={NotFound} />
//                      </Route>
//                  </Router>
//                </div>);
//           }
//         }
//
// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });
