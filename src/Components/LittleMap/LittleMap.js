import './LittleMap.css';
import React from 'react';
import mapboxgl from '!mapbox-gl';



class LittleMap extends React.Component{
   
    constructor(props) {
        super(props)
         this.state={
      lat: parseFloat(this.props.lat),
      lng: parseFloat(this.props.lng),
      zoom: 14
      }
      this.mapContainer = React.createRef();
    }


    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/thelmaijemma/ckp66zlbj0uj718pe7oafzihj',
        center: [lng, lat],
        zoom: zoom
        });
        let marker = new mapboxgl.Marker({
            className: 'marker', color: '#06041f', 
            width:  '5px',
            height: '5px',})
            .setLngLat([lng, lat])
            .setPopup(new mapboxgl.Popup({closeOnClick: false, closeButton: false}).setHTML("<h4>"+this.props.address+"</h4>")) // add popup
            .addTo(map);
            map.addControl(new mapboxgl.NavigationControl());
        }
        


    render() {
    return (
        <div className="little-map">
<div className="card mb-3 half-width-desktop full-width-mobile little-map-split">
    <h3 className="card-header left-align">Find Me <i className="fas fa-location-arrow"></i> <p className="text-muted medium">{this.props.address}</p></h3>
    <div className="map" >
    <div ref={this.mapContainer} className="map-container" />


        </div>
    <div className="card-body">
          <p>
            </p>
        </div>
  </div>
        </div>
    )
}
}

{/*
     constructor(props){
        super(props)

        this.state = { SHOPS }
    }
    under render:
          console.log(SHOPS[0].name)
    Map.defaultProps = {
    center: {
        lat: 51.53841,
        lng: -0.09872
    },
    zoom: 13
} */}

export default LittleMap