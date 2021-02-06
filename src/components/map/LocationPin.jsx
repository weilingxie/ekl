import React from 'react'

const LocationPin = ({ text }) => (
    <div className="pin">
      {/* <Icon icon={locationIcon} className="pin-icon" /> */}
      <i className="pin-icon fas fa-map-marker-alt"></i>
      <p className="pin-text">{text}</p>
    </div>
  )

export default LocationPin