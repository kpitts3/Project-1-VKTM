

//carousel 
$('.carousel').carousel({
  interval: 3000
});
// geolocation api
function geoFindMe() {
    var output = document.getElementById("out");
  
    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  
      var img = new Image();
      img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
  
      output.appendChild(img);
    }
  
    function error() {
      output.innerHTML = "Unable to retrieve your location";
    }
  
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }
  
  
https: //www.weatherbit.io/api/weather-current
    //   console.log("Longatude" + response.coord.lat);lat+lon
    var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=lat,lon&units=imperial&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".lat").html("latitude: " + response.coord.lon);
        $(".lon").text("longitude: " + response.coord.lat);
        $(".rain").text("rain: " + response.rain["3h"]);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        // console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
        console.log("Latitude " + response.coord.lat);
        console.log("Longitude " + response.coord.lon);
        console.log("rain: " + response.rain["3h"]);
    });

