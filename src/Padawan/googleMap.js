
import React, {PropTypes} from "react"
 
import GoogleMap from "react-google-map"
 
 
const MY_API_KEY = "AIzaSyDOqyUDJnltGZwALndto5gyVQvZ_KC66Wc" 
 
const Map = ({googleMaps}) => ( 
  <div className= 'map'>
    <GoogleMap
      googleMaps={googleMaps}

      coordinates={[
        {
          title: "Toulouse",
          position: {
            lat: 43.604363,
            lng: 1.443363,
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation 
            marker.setAnimation(googleMaps.Animation.BOUNCE)
          },
        }
      ]}
      center={{lat: 43.604363, lng: 1.443363}}
      zoom={8}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
      }}
    />
  </div>
)
 
Map.propTypes = {
  googleMaps: PropTypes.object.isRequired,
}
 
export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})
 