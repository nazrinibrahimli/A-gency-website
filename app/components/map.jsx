import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from "./locationPin.jsx"

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
      <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCuMgRJWaVoT1BvhE2QT02thtWam7SXj1Q' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
      </GoogleMapReact>
    </div>
    </div>
  </div>
)

export default Map