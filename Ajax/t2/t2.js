const url = 'https://reqres.in/api/users';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    job: 'Developer',
  }),
};

const userData = await fetch(url, options);
let data = await userData.json();
console.log(data);
