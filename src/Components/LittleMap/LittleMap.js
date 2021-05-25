import GoogleMapReact from 'google-map-react';
import './LittleMap.css';
import React from 'react';
import LocationMarker from '../LocationMarker/LocationMarker';
import QuickStore from '../../../QuickStore';


const SHOPS = QuickStore;
const center = {
    lat: 51.53841,
    lng: -0.09872
}
const zoom = 13

class Map extends React.Component{
   
    constructor(props) {
        super(props)
         this.state={
           placeIds: [],
           positionArray: []
      }
    }

    handleGoogle(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        let placeRequest = this.state.placeIds.map((id, index) =>{
        let url = proxyurl.concat("https://maps.googleapis.com/maps/api/place/details/json?"+KEY+"&"+id);
        
        fetch(url)
          .then(res => res.json())
          .then(res => {
            console.log(res.data)
          }) 
        }) 
    }
    

 componentDidUpdate(){

     if(this.props.mapTag){

    let lowerCaseTag = this.props.mapTag.toLowerCase();
    let search = "https://wellfindapi.herokuapp.com/api/listings/search_match.php?search=".concat("%",lowerCaseTag,"%");
    

    fetch(search)
    .then(res => res.json())
    .then(res => {
      let results = res.data;
      results.map((listing, index) => (
          this.state.placeIds.push(listing.google_id)
      ));
      console.log(this.state.placeIds)
      // this.handleGoogle();
      })

     
    
     
       
      

    
    }


     }
 
    

    render() {
  
    return (
        <div className="map">
<div className="card mb-3 half-width-desktop full-width-mobile map-split">
    <h3 className="card-header left-align">Near Me <i className="fas fa-location-arrow"></i></h3>
  


    
    <div className="map" style={{ height: '40vh', width: '60vh' }}>
    <GoogleMapReact
            bootstrapURLKeys={
                {key: 'AIzaSyDDgDK67FW5YTaOvXb-fF-4ca5JGvPkMSA'}
            }
            defaultCenter= { center }
            defaultZoom= { zoom }
            >
                <LocationMarker lat={ center.lat} lng={center.lng}
                onClick={() => setInfo()}
                />
            </GoogleMapReact>
        </div>

 
    <div className="card-body">
          <p><a href="#" className="card-link"><i className="fas fa-retweet"></i></a>
          <a href="#" className="card-link screen">See Listings <i className="fas fa-arrow-circle-down"></i></a>
          <a href="#" className="card-link mobile">Search Listings <i className="fas fa-arrow-circle-down"></i></a>
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

export default Map