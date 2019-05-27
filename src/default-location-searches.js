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
      address: 'Los Angeles, California',
      bounds: new LatLngBounds(
        new LatLng(34.99100892, -116.9633698),
        new LatLng(32.80793209, -119.3504426)
      ),
    },
  },
  {
    id: 'default-turku',
    predictionPlace: {
      address: 'New York City, New York',
      bounds: new LatLngBounds(
        new LatLng(41.85783084, -72.57892416),
        new LatLng(39.51731711, -75.38043784)
      ),
    },
  },
  //, miami, austin
  {
    id: 'default-tampere',
    predictionPlace: {
      address: 'Raleigh, North Carolina',
      bounds: new LatLngBounds(
        new LatLng(38.30653843, -75.8435422),
        new LatLng(33.30230225, -81.44656962)
      ),
    },
  },
  {
    id: 'default-oulu',
    predictionPlace: {
      address: 'Miami, Florida',
      bounds: new LatLngBounds(
        new LatLng(26.08774825, -79.8881426),
        new LatLng(25.39254736, -80.58852102)
      ),
    },
  },
  {
    id: 'default-ruka',
    predictionPlace: {
      address: 'Austin, Texas',
      bounds: new LatLngBounds(
        new LatLng(31.63145879, -96.35264456),
        new LatLng(28.96639539, -99.15415824)
      ),
    },
  },
];
