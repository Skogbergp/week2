async function fetchData(url, options = {}) {
  const rensponse = await fetch(url, options);
  const data = await rensponse.json();
  if (!rensponse.ok) {
    if (data.message) {
      throw new Error(`Error: ${rensponse.status} - ${data.message}`);
    }
    throw new Error(`Error: ${rensponse.status}`);
  }

  return data;
}

async function main(){
try {
  const user = {
     name: 'John Doe',
     job: 'Developer'
  };
  const url = 'https://reqres.in/api/users';
  const options = {
     method: 'POST',
     headers: {
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(user)
  }
  const userData = await fetchData(url, options);
  console.log(userData);
} catch (error) {
  console.error('An error occurred:', error);
}
}
main();
