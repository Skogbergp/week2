import {distance} from '../lib/euclidean.js'; // Import the distance function from the specified module

// Array of restaurant objects with their details
const restaurants = [
  {
    location: {type: 'Point', coordinates: [25.018456, 60.228982]},
    _id: '6470d38ecb12107db6fe24c1',
    companyId: 68,
    name: 'Ravintola Ladonlukko',
    address: 'Latokartanonkaari 9 A',
    postalCode: '00790',
    city: 'Helsinki',
    phone:
      '+358 50 4653899 Ravintolan esimies +358 50 435 8072 Kokoustarjoilut /ravintola',
    company: 'Sodexo',
    __v: 0,
  },
  // ... other restaurant objects
];

console.log(distance([60, 24], [24.950631, 60.169096])); // Log the distance between two points

// Function to handle successful geolocation
function success(position) {
  const currentLocation = [position.coords.latitude, position.coords.longitude]; // Get current location coordinates

  console.log(currentLocation); // Log current location

  // Sort restaurants by distance from current location
  const sortedRestaurants = restaurants.sort((a, b) => {
    return (
      distance(currentLocation, a.location.coordinates) -
      distance(currentLocation, b.location.coordinates)
    );
  });

  const restarauntTable = document.querySelector('table'); // Get the table element

  // Create table rows for each restaurant
  sortedRestaurants.forEach(restaurant => {
    const row = document.createElement('tr');

    const restarauntName = document.createElement('td');
    restarauntName.innerHTML = restaurant.name;

    const restarauntAddress = document.createElement('td');
    restarauntAddress.innerHTML = restaurant.address;

    row.appendChild(restarauntName);
    row.appendChild(restarauntAddress);
    restarauntTable.appendChild(row);
  });
}

const options = {
  enableHighAccuracy: true, // Enable high accuracy for geolocation
  timeout: 5000, // Set timeout to 5000ms
  maximumAge: 0, // Do not use cached position
};

// Function to handle geolocation errors
function err() {
  console.warn(`ERROR(${err.code}): ${err.message}`); // Log error message
}

navigator.geolocation.getCurrentPosition(success); // Get current position and call success function
