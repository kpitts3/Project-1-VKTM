

//carousel 
$('.carousel').carousel({
 interval: 3000
});

//function for page change-over
function displayResults(){
$("#carouselExampleSlidesOnly").remove();

}

$("#submit").on("click", function(){
//food and drink divs



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



console.log("hello")
       // https: //www.weatherbit.io/api/weather-current
//   console.log("Longatude" + response.coord.lat);lat+lon
// var APIKey = 1;

// Here we are building the URL we need to query the database
// var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka"

// list query

var summer = ["mojito", "wine_cooler", "mimosa", "daiquiri", "sangria", "caipirinha", "pina_colada", "long_island", "corona", "paloma", "moscow_mule", "rose", "tom_collins", "champagne", "mai_tai", "americano", "gin_fiz", "bloody_maria", "bloody_mary", "bellini", "screwdriver", "whiskey", "tequila", "margarita"]

var spring = ["mojito", "mimosa", "daiquiri", "sangria", "caipirinha", "mint_julep", "gimlet", "moscow_mule", "rose", "tom_collins", "champagne", "gin_fiz", "bloody_maria", "bloody_mary", "bellini", "screwdriver", "whiskey", "tequila_sunrise", "margarita"]

var fall = ["mimosa", "sangria", "caipirinha", "mint_julep", "spiced", "gimlet", "paloma", "moscow_mule", "white_russian", "rose", "old_fashioned", "side_car", "manhattan", "champagne", "americano", "gin_fiz", "bloody_maria", "bloody_mary", "irish_coffee", "screwdriver", "whiskey", "cosmo", "mud_slide", "tequila_sunrise", "margarita"]

var winter = ["mimosa", "sangria", "spiced", "paloma", "moscow_mule", "white_russian", "rose", "old_fashioned", "side_car", "manhattan", "champagne", "americano", "gin_fiz", "bloody_maria", "bloody_mary", "irish_coffee", "screwdriver", "whiskey", "mud_slide", "tequila_sunrise", "tequila_sunrise"]

// var smLength = summer.length
var ctgry = summer[Math.floor(Math.random()*summer.length)];
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ctgry;


var summer = ["mojito", "wine_cooler", "mimosa", "frozen_daiquiri", "sangria", "caipirinha", "pina_colada", "long_island", "corona", "paloma", "moscow_mule", "rose", "tom_collins", "champagne", "mai_tai", "americano", "gin_fiz", "bloody_maria", "bloody_mary", "bellini", "screwdriver", "whiskey", "tequila", "margarita"]

var spring = ["mojito", "mimosa", "frozen_daiquiri", "sangria", "caipirinha", "mint_julep", "gimlet", "moscow_mule", "rose", "tom_collins", "champagne", "gin_fiz", "bloody_maria", "bloody_mary", "bellini", "screwdriver", "whiskey", "tequila_sunrise", "margarita"]

var fall = ["mimosa", "sangria", "caipirinha", "mint_julep", "spiced", "gimlet", "paloma", "moscow_mule", "white_russian", "rose", "old_fashioned", "side_car", "manhattan", "champagne", "americano", "gin_fiz", "bloody_maria", "bloody_mary", "irish_coffee", "screwdriver", "whiskey", "cosmo", "mud_slide", "tequila_sunrise", "margarita"]

var winter = ["mimosa", "sangria", "spiced", "paloma", "moscow_mule", "white_russian", "rose", "old_fashioned", "side_car", "manhattan", "champagne", "americano", "gin_fiz", "bloody_maria", "bloody_mary", "irish_coffee", "screwdriver", "whiskey", "mud_slide", "tequila_sunrise", "tequila_sunrise"]

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
       url: queryURL,
       method: "GET"
   })
   // We store all of the retrieved data inside of an object called "response"
   .then(function (response) {

       // Log the queryURL
       console.log(queryURL);
       console.log(response)

       // Log the resulting object
       var drinkName = response.drinks["0"].strDrink;
       var drinkInstructions = response.drinks["0"].strInstructions;
       var drinkImage = response.drinks["0"].strDrinkThumb

       console.log(response.drinks.length)

       console.log(drinkName);
       console.log(drinkInstructions);
       console.log(drinkImage);
       // Transfer content to HTML

       $("#drink-image").append('<img id="theImg"   class = "imgSize" src= ' + drinkImage + ' />');

       $("#drink-name").append(drinkName);

       $("#drink-instructions").append(drinkInstructions);

     

       // Log the data in the console as well

   });
   });




 









 
})
