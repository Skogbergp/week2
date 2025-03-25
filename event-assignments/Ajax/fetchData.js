export async function fetchData(url, options = {}) {
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
