console.log("Sanity Check, JS is connected!")

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

imdbURL = "http://www.omdbapi.com/?t=star+wars&apikey=7aeb760a"

fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "72c1a1d3c8msh9e36717d571537fp101167jsn0ba82bbeba67",
    "x-rapidapi-host": "love-calculator.p.rapidapi.com"
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(err => {
    console.error(err);
  })

fetch("http://www.omdbapi.com/?t=star+trek&apikey=716bc5f5")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(err => {
    console.error(err);
  })

