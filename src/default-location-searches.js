import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-helsinki',
    predictionPlace: {
      address: 'Raleigh, North Carolina',
      bounds: new LatLngBounds(
        new LatLng(38.30653843, -75.8435422),
        new LatLng(33.30230225, -81.44656962)
      ),
    },
  },
  {
    id: 'default-turku',
    predictionPlace: {
      address: 'Charlotte, North Carolina',
      bounds: new LatLngBounds(
        new LatLng(35.39313300000001, -80.67010399999998),
        new LatLng(35.0131739, -81.00955390000001)
      ),
    },
  },
  //, miami, austin
  {
    id: 'default-tampere',
    predictionPlace: {
      address: 'Durham, North Carolina',
      bounds: new LatLngBounds(
        new LatLng(36.1369289, -78.76217200000002),
        new LatLng(35.8667249, -79.00765000000001)
      ),
    },
  },
  {
    id: 'default-oulu',
    predictionPlace: {
      address: 'Greensboro, North Carolina',
      bounds: new LatLngBounds(
        new LatLng(36.2153239, -79.65986599999997),
        new LatLng(35.985195, -80.00689090000003)
      ),
    },
  },
  {
    id: 'default-ruka',
    predictionPlace: {
      address: 'Winston-Salem, North Carolina',
      bounds: new LatLngBounds(
        new LatLng(36.212599, -80.1009689),
        new LatLng(35.996545, -80.38594690000002)
      ),
    },
  },
];
