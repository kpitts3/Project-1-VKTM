$(document).ready(function() {

  // Gets Link for Thunder Sound
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "Assets/sound.mp3");

 
 function thunderClap() {
    audioElement.play();
  };

//carousel 
$('.carousel').carousel({
  interval: 3000
 });
//function for animate.css
function animate(){
  $('.carousel').addClass('animated flash');
  $('#headerOne').addClass('animated flash');
  
  }
 
 var temp = 0;
 $("#submit").on("click", function(){
 thunderClap();
 animate();
  // geolocation api
 
  
 https: //www.weatherbit.io/api/weather-current
    //   console.log("Longatude" + response.coord.lat);lat+lon
    var APIKey = "72183282305dd3dc8b610fa230a21df9";
 
 // Here we are building the URL we need to query the database
var city = $("#city").val();

 var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q="+ city + "&units=imperial&appid=" + APIKey;
 
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
        // $(".rain").text("rain: " + response.rain["3h"]);
        $(".temp").text("Temperature (F) " + response.main.temp);
 
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        // console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
        console.log("Latitude " + response.coord.lat);
        console.log("Longitude " + response.coord.lon);
        // console.log("rain: " + response.rain["3h"]);
        console.log(response.main.temp)
 
 
 
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
var ctgry;
 
 var temp = response.main.temp
 var ranArray = [summer[Math.floor(Math.random()*summer.length)], spring[Math.floor(Math.random()*spring.length)], fall[Math.floor(Math.random()*fall.length)], winter[Math.floor(Math.random()*winter.length)]]
 if (temp <= 40) {
   ctgry = ranArray[3]
 } else if (temp > 40 && temp < 61){


  ctgry = ranArray[2];
 } else if (temp > 61 && temp <71) {
   ctgry = ranArray[1]
 } else {

  ctgry = ranArray[0]
 }
 console.log(temp);

 console.warn(ctgry);
 
 console.warn(ranArray);




 



 
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
 
        $("#drink-image").html('<img id="theImg"   class = "imgSize" src= ' + drinkImage + ' />');
 
        $("#drink-name").html(drinkName);
 
        $("#drink-instructions").html(drinkInstructions);
        
 
      
 
        // Log the data in the console as well
 
    });


  
    
     var summerFood = ["summer","soup", "salad", "sandwich", "hamburger"]
     var springFood = ["spring","soup", "salad", "sandwich", "hamburger"]
     var fallFood = ["fall","soup", "salad", "sandwich", "Steak"]
     var winterFood = ["winter","soup", "salad", "sandwich", "steak"]

     
     var ctgryFood;
     var temp = response.main.temp
     var ranArray = [summerFood[Math.floor(Math.random()*summerFood.length)], springFood[Math.floor(Math.random()*springFood.length)], fallFood[Math.floor(Math.random()*fallFood.length)], winterFood[Math.floor(Math.random()*winterFood.length)]]
     if (temp <= 40) {
      ctgryFood = ranArray[3]
     } else if (temp > 40 && temp < 61){
     
     
     ctgryFood = ranArray[2];
     } else if (temp > 61 && temp <71) {
      ctgry = ranArray[1]
     } else {
     
     ctgryFood = ranArray[0]
     }
     console.log(temp);
     
     console.warn(ctgry);
     
     console.warn(ranArray);
    
     var queryURLFood = "http://api.yummly.com/v1/api/recipes?_app_id=6e04f77b&_app_key=912abf90d814a5f830eebbc729ad24e0&q=" + ctgryFood;

        $.ajax({
           url: queryURLFood,
           method: "GET",
        })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
       
        console.log(queryURLFood);
        console.log(response);
        console.log(response.matches["0"].recipeName)
        console.log(response.matches["0"].imageUrlsBySize[90])
       
        var foodName = response.matches["0"].recipeName;
        var foodImage = response.matches["0"].imageUrlsBySize[90];
        var recipeUrl = response.attribution.url + ctgryFood;
       
        $("#food-image").append('<img id="theImg" class = "imgSize" src= ' + foodImage + ' />');
        $("#food-name").append(foodName);
        $("#food-instructions").append("<a href='" + recipeUrl + "'>" + recipeUrl + "</a>")


  
 })
    });
  })
});

