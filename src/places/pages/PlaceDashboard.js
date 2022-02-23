import { useParams } from 'react-router-dom';
import { PlaceList } from '../components/PlaceList';

export const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001, USA',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'One57',
    description:
      'One57, formerly known as Carnegie 57, is a 75-story, 1,005 ft (306 m) supertall skyscraper at in the Midtown neighborhood of Manhattan in New York City',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/One57_from_Columbus_Circle%2C_May_2014.png',
    address: '157 West 57th Street ',
    location: {
      lat: 40.765556,
      lng: -73.979167,
    },
    creator: 'u2',
  },
];

export const PlaceDashboard = (props) => {
  // @ts-ignore
  const userId = useParams().userId;

  const filteredPlaces = DUMMY_PLACES.filter(
    (place) => place.creator === userId
  );

  return <PlaceList places={filteredPlaces} />;
};
