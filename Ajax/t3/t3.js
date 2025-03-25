import {fetchData} from '../../lib/fetchData.js';

const url = 'https://reqres.in/api/unknown/23';
console.log('post');
try {
  fetchData(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John Doe',
      job: 'Developer',
    }),
  });
} catch (error) {
  console.error('An error occurred while posting:', error);
}
console.log('get');
try {
  const userData = fetchData(url);
} catch (error) {
  console.error('An error occurred while getting:', error);
}
console.log('put');
try {
  fetchData(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'John Doe',
      job: 'Developer',
    }),
  });
} catch (error) {
  console.error('An error occurred while putting:', error);
}
console.log('delete');
try {
  fetchData(url, {
    method: 'DELETE',
  });
} catch (error) {
  console.error('An error occurred while deleting:', error);
}
