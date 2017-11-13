import React from 'react';

export class Storey extends React.Component {
   constructor(props) {
       super(props)

       this.state = {
           colorFloor:''
       }
   }

handleColorChange = () => {

  this.setState({
      colorFloor: 'green'
  })
}

      render() {
        console.log(this.state.colorFloor);
          return (<div>
                <h2 className="flats__tr"><b>SEARCH AFTER THE STOREY</b></h2>
                <div className="image">



                </div>
            </div>);
   }
 }

export default Storey;
// <img src="photos/top_942-600.jpg" className="photo__storey" alt="Planets" useMap="#planetmap"
//   style={{width:"798", height:"508"}}/>
// <map name="planetmap" id="planetmap">
//     <area shape="poly"  onMouseEnter={this.handleColorChange} style={{backgroundColor:'red', height: '30px'}} title="floor 3" href="photos/PIETRO_3.jpg"  coords="459,122,792,313,792,340,462,202,0,299,1,249" target="_self"     />
//     <area shape="poly"  title="floor 2" href="photos/PIETRO_2.jpg"  coords="461,203,791,339,793,369,465,281,3,342,0,298" target="_self"     />
//     <area shape="poly"  title="floor 1" href="photos/PIETRO_1.jpg"  coords="460,281,789,370,788,401,458,360,2,387,12,342" target="_self"     />
//     <area shape="poly"  title="floor 0" href="photos/PARTER.jpg"  coords="463,361,787,406,786,441,459,478,3,448,5,383"  target="_self"     />
// </map>
