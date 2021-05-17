/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-new */

/* koden er skrevet ved å følge denne "guiden": https://blog.logrocket.com/a-practical-guide-to-integrating-google-maps-in-react/ */

import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const GoogleMap = ({ data }) => {
  const googleMapRef = useRef();
  let googleMap;
  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      getLatLng();
    });
  }, [getLatLng]);

  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 15,
      center: {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      },
      disableDefaultUI: false,
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getLatLng = () => {
    let lat;
    let lng;
    let placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${data[0]?.address}, ${data[0]?.postalcode}` },
      (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(results[0].geometry.location);
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          new window.google.maps.Marker({
            position: { lat, lng },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: `${data.name}`,
          });
        } else {
          alert(`Det har skjedd en feil: ${status}`);
        }
      }
    );
  };
  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: 'auto', height: '150px', flex: '1' }}
    />
  );
};

GoogleMap.propTypes = {
  data: PropTypes.array,
};

export default GoogleMap;
