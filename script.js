var spaceMission = $(".spaceMission");
var mainBlock = $(".main-block");
var title= $(".title");


function homePage(){

    var videoVal = 0;
   
    $(document).ready(function () {
  
        var divMain = $("<div class='homePageContent'>")
        var homePageContent = $("<p class='homePageTitle' style='font-size: 20px; font-weight: bold;'>");
        homePageContent.text("Top Stories");
        divMain.append(homePageContent);
 
        var hrefValue =[];
        var searches = ["Nasa Space Mission", "Satellite Launch", "Perseverance rover", "Mars", "Mars Rover", "Solar System", "Galaxy"];

        var randomSearch = Math.floor(Math.random() * (searches.length));
        console.log(searches[randomSearch]);
        var queryURL1 = "https://images-api.nasa.gov/search?q=" +searches[randomSearch]+ "&media_type=video";

        $.ajax({
          url: queryURL1,
          method: "GET",
          success: function (response) {
    
          for(var i = 0 ; i<6; i++){

             var href= response.collection.items[i].href;
             hrefValue.push(href);
          }
    
        for(var j=0; j<hrefValue.length; j++){ 
        
            $.ajax({
            url: hrefValue[j],
            success: function (response1) {

              for(var k=0; k<response1.length; k++){
                if(response1[k].endsWith("~orig.mp4")){
               
                var lastInstance = response1[k].lastIndexOf("/");
                var titleWithSlash = response1[k].slice(36,lastInstance);
                const searchRegExp = /_/g;
                const replaceWith = ' ';
                var title = titleWithSlash.replace(searchRegExp, replaceWith);
                // width="320" height="240"
                // style="overflow-x:auto;
                var video = function (k) {

                  return (
                       '<div class="overall">'+
                        '<div class= "video">'+
                        '<video width = "320" height = "240" controls>' +
                        '<source src=' +encodeURI(response1[k]) + ' alt = "Nasa Space Mission Video" type="video/mp4" >' +
                        '</div>'+
                        '<p class="title-video" >' + title + '</p>' +
                         '</div>');
                    }
                    
                    divMain.append(video(k));
                    mainBlock.append(divMain); 
                }
              
                break;
            }
            }
            });
        }
    }
});
});
}

// APOD Button Click
$(document).ready(function () {

   $('.sidenav').sidenav();

   $(".homeBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
    homePage();

   });

   $(".apodBtn").on("click",function (event) {
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
    $('#cse').empty();
    var apod = $(".apod").text("Quote Generator");
    var quote = $("<div id=quoteDisplay>");
    var quoteBtn = $("<button class= 'btn quoteBtn'>Gimme More</button>")
    apod.append(quote);
    apod.append(quoteBtn);
 
    var quotes = [

        "Space, the final frontier. -Star Trek",
        "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever. -Konstantin Tsiolkovsky",
        "I know the sky is not the limit because there are footprints on the Moon - and I made some of them -Buzz Alrdin",
        "There is no sound in outer space",
        "Never limit yourself because of others limited imagination; never limit others becasuse of your own limited imagination. -Mae Jemison",
        "Earth is a small town with many neighborhoods in a very big universe. -Ron Garan",
        "I looked and I looked but I didn't see God. -Yuri Gagarin",
        "Gravity hurts. -Victor Alexandrow",
        "We are limited only by our imagination. -Ron Garan",
        "In the context of general relativity, space almost is a substance. It can bend and twist and stretch, and probably the best way to thing about space is to just kind of imagine a big piece of rubber that you can pull and twist and bend. -Alan Guth",
        "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe. -Albert Einstein",
        "For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring. - Carl Sagan",
        "By denying scientific principles, one may maintain any paradox. -Galileo Galilei",

      ]
   
      $(".quoteBtn").on("click", function() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        $("#quoteDisplay").text(quotes[randomNumber])});
  });


// Local Hubble View Button Click
$(".localHubbleViewBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
    $('#cse').empty();
    var hubbleView = $(".localHubbleView").text("Live Hubble View");
    var hubbleWindow = $("<div id=hubbleWindow>");
    var hubbleTitle = $("<div class='hubbleTitle'></div>");
    var hubbleImage = $("<img class='responsive-img hubbleImage'>");
    var hubbleDescription = $("<div class='hubbleDescription'></div>");

    var queryURL = "https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/external_feed/st_live?sort=-pub_date";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(hubbleLive) {
      console.log(hubbleLive[0]);

     // Transfer content to HTML
        $(".hubbleTitle").html("<h3>" + hubbleLive[0].title + " Telescope Details</h3>");
        $(".hubbleImage").attr("src" , hubbleLive[0].image);
        $(".hubbleDescription").text("What is Hubble Looking at right now?: " + hubbleLive[0].description);
        
      });
      hubbleWindow.append(hubbleTitle).append(hubbleImage).append(hubbleDescription);
      hubbleView.append(hubbleWindow);
});

// Near Earth Objects
$(".newEarthObjectsBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
  
    $(".nearEarthObjects").empty();
    $('#cse').empty();
    var today = moment().format("YYYY-MM-DD");
    console.log(today);
    var nearEarthURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+ today + "&end_date=" + today + "END_DATE&api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ";
    console.log(nearEarthURL);

    $.ajax({
        url: nearEarthURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var nameFromEarth = (response.near_earth_objects[today][0].name);
        console.log(nameFromEarth);
        var sizeFromEarth = (response.near_earth_objects[today][0].estimated_diameter.feet.estimated_diameter_max);
        var sizeFixed = sizeFromEarth.toFixed(2);
        console.log(sizeFixed);
        var milesFromEarth = (response.near_earth_objects[today][0].close_approach_data[0].miss_distance.miles);
        var milesFixed = parseFloat(milesFromEarth).toFixed(2);
        console.log(milesFixed);
        var hitEarth = (response.near_earth_objects[today][0].is_potentially_hazardous_asteroid);
        console.log(hitEarth);
        var moreInfo = (response.near_earth_objects[today][0].nasa_jpl_url)
        console.log(moreInfo);

        var nearEarthObjects = $(".nearEarthObjects");
        nearEarthObjects.append($("<h1>").text("Nearest Asteroid to Earth!").css("text-decoration", "underline"));
        nearEarthObjects.append($("<h3>").text("What is this Asteroid's Name?"));
        nearEarthObjects.append(nameFromEarth);
        nearEarthObjects.append($("<h3>").text("How big is " + nameFromEarth + "?"));
        nearEarthObjects.append(sizeFixed + " feet in diameter");
        nearEarthObjects.append($("<h3>").text("How far is it from earth?"));
        nearEarthObjects.append(milesFixed + " miles away");
        nearEarthObjects.append($("<h3>").text("The real question...is it going to hit Earth?"));

        if (hitEarth === false) {
          nearEarthObjects.append($("<p>").text("Just a fly-by!"))
            
        } else if (hitEarth =! false) {
          nearEarthObjects.append($("<h2>").text("Potentially. Let's keep an eye in the sky!"))
        };

        nearEarthObjects.append($("<a>").attr("href", moreInfo).attr("target", "blank").text("Click here for more information on " + nameFromEarth).css("color", "rgb(77, 182, 172)"));
        
      });
    
});

// Mars Weather
$(".marsWeatherBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
    $('#cse').empty();
   
    var marsWeather = $(".marsWeather").text("Mars Weather");

    var queryURL = "https://api.nasa.gov/insight_weather/?api_key=unepUpoJglDuNOxtOuPToAdKApZ40RRSvfwIHto6&feedtype=json&ver=1.0";
    var weatherImage = $("<div><iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='800' height='530'  scrolling='no' frameborder='0'></iframe><br><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>List of Current Humans on Mars</a>");
    marsWeather.append(weatherImage)
});

// Photo of the Day
$(".photoBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
    $('#cse').empty();
  
    var nasaPhoto = $(".photo");
    var br = $("<br>");
    var formDiv = $("<div>").addClass("apodForm");
    var titleDiv = $("<div>").addClass("titleDiv").css("margin-top", "30px");
    var displayDiv = $("<div>").addClass("displayDiv");
    var imgActual = $("<img>").attr("id", "imgActual").attr("src", "").attr("alt", "apod");
    var formActual = $("<form>");
    var par1 = $("<p>").text("Astronomy Photo of the Day started in July of 1995.");
    var par2 = $("<p>").text("Input a date! Please use format of YYYY-MM-DD");
    var inputData = $("<input>").attr("id", "selectedDate").attr("type", "text").attr("placeholder", "ex: 2012-03-28");
    var photoSearchBtn = $("<button>").addClass("photoSearchBtn").text("Search Date");
    var bigForm = formDiv.append(formActual);
    bigForm.append(par1);
    bigForm.append(par2);
    bigForm.append(inputData);
    bigForm.append(photoSearchBtn);
    nasaPhoto.append(bigForm);
    nasaPhoto.append(titleDiv);
    nasaPhoto.append(displayDiv);
    
    
   
    $(".photoSearchBtn").on("click", function(event){
    var selectedDate = document.getElementById("selectedDate").value;
      console.log(selectedDate);
  
      var photoURL = "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ&date=" + selectedDate + "&"
      console.log(photoURL);
  
      $.ajax({
          url: photoURL,
          method: "GET"
      }).then(function(response) {
          displayDiv.empty();
          console.log(response);
          var imgResponse = response.url;
          console.log(imgResponse);
          var titlePhoto = response.title;
          console.log(titlePhoto);
          var explanationPhoto = response.explanation;
          console.log(explanationPhoto);
  
          imgActual.attr("src", imgResponse);
          titleDiv.append(br).append(titlePhoto);
          displayDiv.append(br).append(imgActual);
          displayDiv.append(br).append(explanationPhoto);
  
    });
  });
    
  });

// Space Information
$(".spaceInfoBtn").on("click", function(event){
    event.preventDefault();
   
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty(); 
    $('#cse').empty();
    var spaceInfo = $(".spaceInfo").text("Planet Information");
    var div = $("<div id='spaceInfoContent'>");
    var spaceContent = $("<div id='spaceContent'>");
    var mercury = $("<a class='waves-effect waves-light btn planet-btn' data-img='photos/mercury.jpg' data-planet='Mercury_(planet)'>Mercury</a>");
    var venus = $("<a class='waves-effect waves-light btn planet-btn' data-img='photos/venus.jpg' data-planet='Venus'>Venus</a>");
    var earth = $("<a class='waves-effect waves-light btn planet-btn' data-img='photos/earth.png' data-planet='Earth'>Earth</a>");
    var mars = $("<a class='waves-effect waves-light btn planet-btn' data-img='photos/mars.jpg' data-planet='Mars'>Mars</a>");
    var jupiter = $("<a class='waves-effect waves-light btn planet-btn' data-img='photos/jupiter.jpg' data-planet='Jupiter'>Jupiter</a>");
    var saturn = $("<a class='waves-effect waves-light btn planet-btn' data-img='photos/saturn.png' data-planet='Saturn'>Saturn</a>");
    var neptune = $("<a class='waves-effect waves-light btn planet-btn' data-img='photos/neptune.png' data-planet='Neptune'>Neptune</a>");
    var uranus = $("<a class='waves-effect waves-light btn planet-btn' data-img='photos/uranus.jpg' data-planet='Uranus'>Uranus</a>");
    var planetPic = $("<div class='planet-pic'></div>")
    var wiki = $("<div class='wikiInfo'></div>");
    var solarDiv = $("<div></div>");
    var solar = $("<img class='responsive-img' src='photos/solarsystem.png'>Source: Wikipedia.org</img>");


    div.append(mercury).append(venus).append(earth).append(mars).append(jupiter).append(saturn).append(neptune).append(uranus);
    spaceInfo.append(div);
    spaceInfo.append(solarDiv);
    solarDiv.append(solar);

    
    $(document).ready(function() {
        
        $(".planet-btn").on("click", function() {
            console.log($(this).attr("data-planet"))
            var planet = $(this).attr("data-planet")
            console.log($(this).attr("data-img"))
            var planetImg = $(this).attr("data-img")
            var Wikiurl = `http://en.wikipedia.org/w/api.php?format=json&exintro=True&action=query&titles=${planet}&prop=extracts&explaintext=True&origin=*`;
            solarDiv.empty();
            spaceInfo.append(spaceContent);
            spaceContent.append(planetPic)
            spaceContent.append(wiki);

            $(".planet-pic").empty().append(`<img src='${planetImg}'></img>`);

          $.ajax({
            url: Wikiurl,       
            method: "GET",     
          }).then(function(response) {	 
          
            var pageId = Object.keys(response.query.pages)[0];
            var intro = response.query.pages[pageId].extract

          
            $(".wikiInfo").empty().append(`<div class="box"> <p>${intro}</p> <p id='source-text'>Source: Wikipedia.org</p></div>`);
          });
          })
    }) 
    
});
});

$(document).on("click", 'ul a', function(event){
    event.preventDefault();
   
   $('div a').removeClass('active');
   $(this).addClass('active');

   const mq = window.matchMedia( "(max-width: 600px)" );

   if(mq.matches){
        if($('div a').hasClass('active')){
            $(".side-block").empty();
        }

      }
  
});

homePage();