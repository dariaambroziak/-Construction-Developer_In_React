import React from 'react';

export class Storey extends React.Component {
   constructor(props) {
       super(props)

       this.state = {
       }
   }

      render() {
        console.log(this.state.colorFloor);
          return (<div>
                    <h2 className="flats__tr"><b>FINANCING OFFER</b></h2>
            </div>);
   }
 }

export default Storey;
