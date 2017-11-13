import React from 'react';

export class OfferFlats extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      filterFloor: '',
      available: false,
      filterRoom: '',
      filterArea: '0'
    }
  }

  changeBox = () => {
    this.setState({
      available: (this.state.available ? false : true)
    });
  }

  changeFilterFloor = (text) => {
    this.setState({
      filterFloor: text
    });
  }

  changeFilterRoom = (room) => {
    this.setState({
      filterRoom: room
    });
  }

  changeFilterArea = (area) => {
    this.setState({
      filterArea: area
    });
  }

  render() {
    const flats = [
         {floor: "4", room: "3", area: "43", available: false},
         {floor: "2", room: "2", area: "56", available: true},
         {floor: "2", room: "4", area: "32", available: true},
         {floor: "1", room: "2", area: "45", available: true},
         {floor: "2", room: "1", area: "68", available: false},
         {floor: "3", room: "2", area: "36", available: true},
         {floor: "1", room: "3", area: "33.7", available: true},
         {floor: "2", room: "5", area: "44.5", available: true},
         {floor: "3", room: "1", area: "62", available: false},
         {floor: "1", room: "3", area: "35", available: false},
         {floor: "2", room: "5", area: "44.6", available: true},
         {floor: "3", room: "1", area: "63", available: false},
         {floor: "1", room: "3", area: "34", available: false},
         {floor: "4", room: "3", area: "43.2", available: false},
         {floor: "2", room: "2", area: "56.2", available: true},
         {floor: "2", room: "4", area: "33", available: true},
         {floor: "1", room: "2", area: "45.4", available: true},
         {floor: "2", room: "1", area: "68.7", available: false},
         {floor: "3", room: "3", area: "36.8", available: true},
         {floor: "1", room: "3", area: "33.2", available: true},
         {floor: "2", room: "5", area: "44.9", available: true},
         {floor: "3", room: "2", area: "62.6", available: false},
         {floor: "1", room: "3", area: "35.1", available: false},
         {floor: "2", room: "5", area: "44.3", available: true},
         {floor: "3", room: "2", area: "63.5", available: false},
         {floor: "1", room: "3", area: "34.7", available: false}

      ];
    return (<div>

            <SearchBar1 filterF = {this.state.filterFloor} filterR = {this.state.filterRoom}
                          filterA = {this.state.filterArea} available = {this.state.available}
                          changeBox = {this.changeBox}
                          filterFloor = {this.changeFilterFloor} filterRoom = {this.changeFilterRoom}
                          filterArea = {this.changeFilterArea}/>
            <CatTable1 flats = { flats } filterF = {this.state.filterFloor} filterR = {this.state.filterRoom}
                          filterA = {this.state.filterArea} filterAv = {this.state.available}/>
          </div>)
  }
}

class SearchBar1 extends React.Component {

  handlerCheckBox = () => { // rozwiązanie problemu event.target.checked
    if (typeof this.props.changeBox === 'function') {
      this.props.changeBox();
    }
  }

  handlerSearchFloor  = (event) => {
    if (typeof this.props.filterFloor === 'function') {
      this.props.filterFloor(event.target.value);
    }
  }

  handlerSearchRoom  = (event) => {
    if (typeof this.props.filterRoom === 'function') {
      this.props.filterRoom(event.target.value);
    }
  }

  handlerSearchArea  = (event) => {
    if (typeof this.props.filterArea === 'function') {
      this.props.filterArea(event.target.value);
    }
  }


  render() {
    return (<div className="perfectFlat">
           <h2 className="flats__tr"><b>FIND THE PERFECT FLAT</b></h2>
           <form className="flats__search">
              <input className="col-sm-6 col-md-4 col-lg-4 " type = 'text' placeholder = "Floor" onChange = {this.handlerSearchFloor}/>
              <input className="col-sm-6 col-md-4 col-lg-4" type = 'text' placeholder = "Rooms" onChange = {this.handlerSearchRoom}/>
              <input className="col-sm-6 col-md-4 col-lg-4" type = 'text' placeholder = "Minimum area" onChange = {this.handlerSearchArea}/>
              <label className="col-sm-6 col-md-12 col-lg-12"><input type = 'checkbox' checked = {this.props.available} onChange = {this.handlerCheckBox}/>
                Available</label>
            </form>
          </div>)
  }
}

class CatTable1 extends React.Component {

  render() {

    let rows = [];
    let lastCategory = null;
    let filtersF = this.props.filterF;
    let filtersR = this.props.filterR;
    let filtersA = parseInt(this.props.filterA);
    let checkBox = this.props.filterAv;

    this.props.flats.forEach(function(flat) {

      let flatArea = parseInt(flat.area);

      if((flat.floor.includes(filtersF)) && (flat.room.includes(filtersR))
          && (flatArea>filtersA) && ((flat.available === true) || (checkBox === false))){
        rows.push(<CatRow1 flat = {flat} key={flat.area}/>);
      }
      lastCategory = flat.floor;
    });

    return (<table className="flats">
            <thead>
              <tr className="flats__tr">
                <th> FLOOR </th>
                <th> ROOMS </th>
                <th> AREA </th>
                <th> AVAILABLE </th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>)
  }
}


class CatRow1 extends React.Component {
  render() {

    let open = this.props.flat.available ? "available " : "not available"

    return (<tr className="searchFlat">
            <td>
              {this.props.flat.floor}
            </td>
            <td>
              {this.props.flat.room}
            </td>
            <td>
              {this.props.flat.area}
            </td>
            <td>
              { open }
            </td>

          </tr>)
  }
}

export default OfferFlats;
