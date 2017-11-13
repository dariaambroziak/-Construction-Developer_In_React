import React from 'react';
import GoogleMapReact from 'google-map-react';


class List extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(<ul className="list__ul">
      {this.props.lists.map((param, index) =>{
        return <li className="list__li" key={index}>{param.text}</li>
      })}
    </ul>)
  }
}


class AnyReactComponent extends React.Component {
  constructor(props){
    super(props);

  }

  handleClick = (e) =>{
    this.props.clickFunction(e)
  }

  render () {
    return(<div>
      <img src={this.props.img_src} className="YOUR-CLASS-NAME" data-lat={this.props.lat} data-color={this.props.color}
            onClick={this.handleClick}/><b style={{visibility: this.props.windows }}></b>

      </div>)
    }
  }


export class Locations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        markers: [],
        markersList: [],
    }
  }

  componentDidMount(){

    this.setState({
      markers: [{lat: 52.32181907768039, lng: 20.948610305786133, img_src: 'photos/Markers/yellow_MarkerA.png', text: 'A: Primary school nr.344', windows : 'hidden', color: 'yellow'},
                {lat: 52.327675, lng: 20.944563099999982, img_src: 'photos/Markers/yellow_MarkerB.png', text: 'B: Kindergarten nr.226', windows : 'hidden', color: 'yellow'},
                {lat: 52.328188, lng: 20.945760000000064, img_src: 'photos/Markers/yellow_MarkerC.png', text: 'C: Nursery nr.36', windows : 'hidden', color: 'yellow'},
                {lat: 52.3209503, lng: 20.94310500000006, img_src: 'photos/Markers/yellow_MarkerD.png', text: 'D: Batern country', windows : 'hidden', color: 'yellow'},
                {lat: 52.3298739, lng: 20.950973999999974, img_src: 'photos/Markers/yellow_MarkerE.png', text: 'E: Fairy land', windows : 'hidden', color: 'yellow'},

                {lat: 52.326454, lng: 20.950946899999963, img_src: 'photos/Markers/blue_MarkerA.png', text: 'A: Żabka', windows : 'hidden', color: 'blue'},
                {lat: 52.325912, lng: 20.94531489999997, img_src: 'photos/Markers/blue_MarkerB.png', text: 'B: M&L Delikatesy', windows : 'hidden', color: 'blue'},
                {lat: 52.3222018, lng: 20.95015539999997, img_src: 'photos/Markers/blue_MarkerC.png', text: 'C: DH Tarchomin', windows : 'hidden', color: 'blue'},
                {lat: 52.32268939999999, lng: 20.94270670000003, img_src: 'photos/Markers/blue_MarkerD.png', text: 'D: Żabka', windows : 'hidden', color: 'blue'},
                {lat: 52.327899, lng: 20.943962499999998, img_src: 'photos/Markers/blue_MarkerE.png', text: 'E: Sklep ABC', windows : 'hidden', color: 'blue'},

                {lat: 52.3262, lng: 20.94945000000007, img_src: 'photos/Markers/pink_MarkerA.png', text: 'A: Talarowa 01', windows : 'hidden', color: 'pink'},
                {lat: 52.32417, lng: 20.946270000000027, img_src: 'photos/Markers/pink_MarkerB.png', text: 'B: Erazma z Zakroczymia 01', windows : 'hidden', color: 'pink'},
                {lat: 52.32489, lng: 20.94759010000007, img_src: 'photos/Markers/pink_MarkerC.png', text: 'C: Erazma z Zakroczymia 02', windows : 'hidden', color: 'pink'},
                {lat: 52.32283, lng: 20.944790000000012, img_src: 'photos/Markers/pink_MarkerD.png', text: 'D: Mehoffera 04', windows : 'hidden', color: 'pink'},
                {lat: 52.32281256416483, lng: 20.94393253326416, img_src: 'photos/Markers/pink_MarkerE.png', text: 'E: Mehoffera 05', windows : 'hidden', color: 'pink'},

                {lat: 52.3251735, lng: 20.945689600000037, img_src: 'photos/Markers/red_MarkerA.png', text: 'A: Medicover', windows : 'hidden', color: 'red'},
                {lat: 52.321751, lng: 20.948411899999996, img_src: 'photos/Markers/red_MarkerB.png', text: 'B: dr n. med. Dorota Kapiszewska-Dzedzej', windows : 'hidden', color: 'red'},
                {lat: 52.3269005, lng: 20.942221000000018, img_src: 'photos/Markers/red_MarkerC.png', text: 'C: lek. med. Trojanowski Piotr', windows : 'hidden', color: 'red'},
                {lat: 52.3283427, lng: 20.949323999999933, img_src: 'photos/Markers/red_MarkerD.png', text: 'D: Dentica Stomatologia Rodzinna Dorota Giza-Padzińska', windows : 'hidden', color: 'red'},
                {lat: 52.319041, lng: 20.957176900000036, img_src: 'photos/Markers/red_MarkerE.png', text: 'E: LUX MED', windows : 'hidden', color: 'red'},

                {lat: 52.3253636, lng: 20.949414700000034,  img_src: 'photos/family_files/marker-cat-7.png', text: 'It is here', windows: 'hidden', color: 'brown'}],
    });
  }

    handleClickWindows = (e) =>{
      let newMarkers = this.state.markers
      let listMarkers = this.state.markersList

      for (let i = 0; i < newMarkers.length; i++) {

        if(newMarkers[i].lat===Number(e.target.getAttribute('data-lat'))) {
          newMarkers[i].windows==='hidden' ? newMarkers[i].windows='visible' : newMarkers[i].windows='hidden';
        }
      }
      listMarkers = [];
      for (let i = 0; i < newMarkers.length; i++) {
        if(e.target.getAttribute('data-color') === newMarkers[i].color){
          listMarkers.push(newMarkers[i])
        }
      }

      this.setState({
        markers: newMarkers,
        markersList: listMarkers
      })
    }

  render() {
    return (<div className="showMap">
      <h2>LOCALIZATION</h2>
      <p>Near the investment of Neo Block there are schools and kindergartens,
      health centers and service and retail outlets. There are network stores and
      numerous local shops waiting for you. There are also a bank, post office,
      restaurant, sushi bar and pizzeria. The beautiful parks are popular for walks.</p>

      <div style={{position:'relative'}}><GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyANC6u2qaMm1coCYI1KtOmlJzwV2C8lyA8"}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{height: '500px'}}
      >
          {this.state.markers.map((marker, i) =>{
            return(
                  <AnyReactComponent
                    lat={marker.lat}
                    lng={marker.lng}
                    img_src={marker.img_src}
                    text={marker.text}
                    windows={marker.windows}
                    clickFunction={this.handleClickWindows}
                    key={marker.lat}
                    color={marker.color}
                    />
              )
            })}

            <List lists={this.state.markersList}/>

      </GoogleMapReact></div>

    </div>
    );
  }
}

Locations.defaultProps = {
  center: {lat: 52.3253636, lng: 20.95241470000002},
  zoom: 15

};


export default Locations;
