import GoogleMapReact from 'google-map-react';
import './Map.css';
import React from 'react';
import LocationMarker from '../LocationMarker/LocationMarker';
import QuickStore from '../../../QuickStore';
import LocationInfo from '../LocationInfo/LocationInfo';

const SHOPS = QuickStore;
const center = {
    lat: 51.53841,
    lng: -0.09872
}
const zoom = 13

class Map extends React.Component{
    constructor(props){
        super(props)

        this.state = { SHOPS }
    }
    
    

    render() {
        console.log(SHOPS[0].name)
    return (
        <div className="map">
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
            <LocationInfo></LocationInfo>
           {SHOPS[0].name}
        </div>
    )
}
}

{/*Map.defaultProps = {
    center: {
        lat: 51.53841,
        lng: -0.09872
    },
    zoom: 13
} */}

export default Map