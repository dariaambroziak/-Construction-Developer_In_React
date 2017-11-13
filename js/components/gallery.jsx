import React from 'react';


export class Gallery extends React.Component {
 render() {

   const data = [{
     id: 1,
     name: "Island",
     image: "photos/house/img4.jpg"
   }, {
     id: 2,
     name: "Forest",
     image: "photos/inside.jpg"
   }, {
     id: 3,
     name: "Whale",
     image: "photos/house/img1.jpg"
   }, {
     id: 4,
     name: "Mountain",
     image: "photos/top-slide-01.jpg"
   }, {
     id: 5,
     name: "Boat",
     image: "photos/back2.jpg"
   }, {
     id: 6,
     name: "Flowers",
     image: "photos/back1.jpg"
   }, {
     id: 7,
     name: "Fire",
     image: "photos/house/img8.jpg"
   }, {
     id: 8,
     name: "Garden",
     image: "photos/house/img7.jpg"
   }, {
     id: 9,
     name: "Bridge",
     image: "photos/house/img5.jpg"
   }];


   // Create tile for each item in data array
   // Pass data to each tile and assign a key
   return (<div>
       <div className="tiles">
         {data.map((data) => {
           return <Tile data={data} key={data.id} />
         })}
       </div>
     </div>
   );
 }
}

class Tile extends React.Component {
 constructor(props) {
     super(props);
     this.state = {
       open: false,
       mouseOver: false
     };

     this._clickHandler = this._clickHandler.bind(this);
     this._mouseEnter = this._mouseEnter.bind(this);
     this._mouseLeave = this._mouseLeave.bind(this);
   }

 _mouseEnter(e) {
   e.preventDefault();
   if (this.state.mouseOver === false) {
     this.setState({
       mouseOver: true
     })
   }
 }
 _mouseLeave(e) {
   e.preventDefault();
   if (this.state.mouseOver === true) {
     this.setState({
       mouseOver: false
     })
   }
 }
 _clickHandler(e) {
   e.preventDefault();
   if (this.state.open === false) {
     this.setState({
       open: true
     });
   } else {
     this.setState({
       open: false
     });
   }
 }

 render() {

   let tileStyle = {};
   let headerStyle = {};
   let zoom = {};

   if (this.state.open) {
     tileStyle = {
       width: '62vw',
       height: '62vw',
       position: 'absolute',
       top: '50%',
       left: '50%',
       margin: '0',
       marginTop: '-31vw',
       marginLeft: '-31vw',
       boxShadow: '0 0 40px 5px black',
       transform: 'none'
     };
   } else {
     tileStyle = {
       width: '25vw',
       height: '25vw',
     };
   }

   return (
     <div className="tile">
       <img
         onMouseEnter={this._mouseEnter}
         onMouseLeave={this._mouseLeave}
         onClick={this._clickHandler}
         src={this.props.data.image}
         alt={this.props.data.name}
         style={tileStyle}
       />
     </div>
   );
 }
}


export default Gallery;
