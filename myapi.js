const apiEndpoint = 'https://api-mainnet.magiceden.dev/v2/collections/degods/stats';

fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    const floorPrice = data.floor_price;
    document.getElementById("floor-price").innerHTML = `Floor Price: $${floorPrice}`;
  })
  .catch(error => console.error(error));