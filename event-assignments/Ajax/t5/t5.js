import {fetchData} from '../../../lib/fetchData.js';

const url = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const restarauntTable = document.querySelector('table'); // Get the table element
let lastHighlighted = null;
const modal = document.getElementById('modal');
let restaurants = [];

async function main() {
  try {
    restaurants = await getRestaurants();
  } catch (error) {
    console.error(error);
  }
  sortRestaurants();
  createTable();
}

async function getRestaurants() {
  try {
    return await fetchData(url + '/restaurants');
  } catch (error) {
    console.error(error);
  }
}

async function getDaysMenu(id, lang = 'fi') {
  try {
    return await fetchData(`${url}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error);
  }
}
function createMenu(menu, modal) {
  const menyTable = document.createElement('table');
  menu.forEach(course => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    name.innerHTML = course.name;
    const price = document.createElement('td');
    price.innerHTML = course.price;
    row.appendChild(name);
    row.appendChild(price);
    menyTable.appendChild(row);
  });
  modal.appendChild(menyTable);
}

function sortRestaurants() {
  return restaurants.sort((a, b) => {
    return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
  });
}

function createRestaurantCells(restaurant, tr) {
  const nameTd = document.createElement('td');
  nameTd.innerHTML = restaurant.name;

  const addressTd = document.createElement('td');
  addressTd.innerHTML = restaurant.address;

  tr.appendChild(nameTd);
  tr.appendChild(addressTd);
}

function createTable() {
  restaurants.forEach(restaurant => {
    const row = document.createElement('tr');
    createRestaurantCells(restaurant, row);
    restarauntTable.appendChild(row);
    row.addEventListener('click', async () => {
      if (lastHighlighted !== null) {
        lastHighlighted.classList.remove('highlight');
      }
      lastHighlighted = row;
      row.classList.add('highlight');

      createModal(restaurant);
    });
  });
}

async function createModal(restaurant) {
  try {
    const menu = await getDaysMenu(restaurant._id);

    modal.innerHTML = '';
    modal.showModal();

    const h3 = document.createElement('h3');
    h3.innerHTML = restaurant.name;

    const address = document.createElement('p');
    address.innerHTML = restaurant.address;

    const postalCode = document.createElement('p');
    postalCode.innerHTML = restaurant.postalCode;

    const city = document.createElement('p');
    city.innerHTML = restaurant.city;

    const phone = document.createElement('p');
    phone.innerHTML = restaurant.phone;

    const company = document.createElement('p');
    company.innerHTML = restaurant.company;

    modal.appendChild(h3);
    modal.appendChild(address);
    modal.appendChild(postalCode);
    modal.appendChild(city);
    modal.appendChild(phone);
    modal.appendChild(company);

    createMenu(menu.courses, modal);
  } catch (error) {
    console.error(error);
  }
}

main();
