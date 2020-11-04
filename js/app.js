var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
   
  fetch('https://imdb-api.com/en/API/SearchSeries/k_82t1jm1h/saturday%20night%20live', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  