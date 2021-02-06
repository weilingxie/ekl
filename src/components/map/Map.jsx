import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
const Config = require('../../config.json')

const location = {
    address: Config.address,
    lat: Config.latitude,
    lng: Config.longitude,
  };

const Map = ({ zoomLevel }) => (
            
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: Config.googlemapapikey }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={Config.latitude}
            lng={Config.longitude}
            text={Config.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map;