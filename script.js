var spaceMission = $(".spaceMission");
var mainBlock = $(".main-block");
var title= $(".title");

function homePage(){

    var videoVal = 0;
    $(document).ready(function () {
        
        $('.modal').modal();

        var divMain = $("<div class='homePageContent'>")
        var homePageContent = $("<p class='homePageTitle' style='font-size: 20px; font-weight: bold; padding:10px'>");
        homePageContent.text("Top Stories");
        divMain.append(homePageContent);
 
        var div = $("<form>");
      
        var input = $("<input type='text'  id='search' name='Textsearch'>");
        var button = $("<a href='#modal1' class='btn modal-trigger searchBtn'> <i class='material-icons'>search</i>");
        div.append(input).append(button);
        homePageContent.append(div);
        divMain.append(div);
        mainBlock.append(divMain);

        var hrefValue =[];
        var searches = ["Nasa Space Mission", "Satellite Launch", "Perseverance rover", "Mars", "Mars Rover", "Solar System", "Galaxy", "Asteroids"];

        var randomSearch = Math.floor(Math.random() * (searches.length));
        console.log(searches[randomSearch]);
        var queryURL1 = "https://images-api.nasa.gov/search?q=" +searches[randomSearch]+ "&media_type=video";

        $.ajax({
          url: queryURL1,
          method: "GET",
          success: function (response) {
    
          for(var i = 0 ; i<6; i++){
        //   debugger
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
                var title = response1[k].slice(36,lastInstance);

                var video = function (k) {
                    return ('<div class="video video-container" style="overflow-x:auto;>' +
                        `<p class="title-video">${title}</p>` + '<video class="responsive-video" width="320" height="240" controls>' +
                        '<source src=' +encodeURI(response1[k]) + ' alt = "Nasa Space Mission Video" type="video/mp4" >' +
      
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


  $(".searchBtn").on("click", function(event){
    
     console.log("Received the hjghj click");
     event.preventDefault();
     var inputVal = $("input:text").val().trim();
     console.log(inputVal);
     if(inputVal != ""){
          $("#modal1").show();
        
          var APIKey = "fb7ea89c26de6962a04a6bdfdf2764d1";

          var URL = "https://cors-anywhere.herokuapp.com/http://api.serpstack.com/search?access_key="  + APIKey + "&query=" + inputVal;
          console.log(URL);
          var result = '';
        $.ajax({
          
          url: URL,
          contentType: 'application/json',
          success: function (serpResponse) {
                serpResponse.organic_results.forEach(res => {
                  result = `
                      <a href='${res.url}' target=_blank><h4 class = 'result-title'>${res.title} </h4></a>
                      <p class = 'result url'>${res.url}</p> 
                      <p class = 'result snippet'>${res.snippet}</p>`
                $(".searchContent").append(result);
              });
              }
        });
      }else{
        $("#modal1").hide();
        $("input:text").val("Search here");
        $("#search").on("click", function(){
          $("input:text").val("");
        });
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
        console.log(sizeFromEarth);
        var sizeFixed = sizeFromEarth.toFixed(2);
        console.log(sizeFixed);
        var milesFromEarth = (response.near_earth_objects[today][0].close_approach_data[0].miss_distance.miles);
        console.log(milesFromEarth);
        // var milesFixed = milesFromEarth.toFixed(2);
        // console.log(milesFixed);
        var hitEarth = (response.near_earth_objects[today][0].is_potentially_hazardous_asteroid);
        console.log(hitEarth);

        var nearEarthObjects = $(".nearEarthObjects");
        nearEarthObjects.append($("<h2>").text("Nearest Asteroid to Earth!").css("color", "red"));
        nearEarthObjects.append($("<h3>").text("What is this Asteroid's Name?"));
        nearEarthObjects.append(nameFromEarth);
        nearEarthObjects.append($("<h3>").text("How big is " + nameFromEarth + "?"));
        nearEarthObjects.append(sizeFixed + " feet in diameter");
        nearEarthObjects.append($("<h3>").text("How far is it from earth?"));
        nearEarthObjects.append(milesFromEarth + " miles away");
        nearEarthObjects.append($("<h3>").text("The real question...is it going to hit Earth?"));

        if (hitEarth === false) {
          nearEarthObjects.append($("<p>").text("Just a fly-by!"))
            
        } else if (hitEarth =! false) {
          nearEarthObjects.append($("<h2>").text("Potentially. Let's keep an eye in the sky!"))
        };
        
      });
    
});

// Mars Weather
$(".marsWeatherBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
  
    var marsWeather = $(".marsWeather").text("Mars Weather");
    
    var queryURL = "https://api.nasa.gov/insight_weather/?api_key=unepUpoJglDuNOxtOuPToAdKApZ40RRSvfwIHto6&feedtype=json&ver=1.0";
    var weatherImage = $("<div><iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='800' height='530'  scrolling='no' frameborder='0'></iframe><br><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>List of Current Humans on Mars</a>");
    marsWeather.append(weatherImage)
});

// Space Information
$(".spaceInfoBtn").on("click", function(event){
    event.preventDefault();
   
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty(); 
    
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


    div.append(mercury).append(venus).append(earth).append(mars).append(jupiter).append(saturn).append(neptune).append(uranus);
    spaceInfo.append(div);
    spaceInfo.append(`<img class='responsive-img' src='photos/solarsystem.png'>Source: Wikipedia.org</img>`);
    
    $(document).ready(function() {
        
        $(".planet-btn").on("click", function() {
            console.log($(this).attr("data-planet"))
            var planet = $(this).attr("data-planet")
            console.log($(this).attr("data-img"))
            var planetImg = $(this).attr("data-img")
            var Wikiurl = `http://en.wikipedia.org/w/api.php?format=json&exintro=True&action=query&titles=${planet}&prop=extracts&explaintext=True&origin=*`;
          
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
    // }else{
    //     if($('div a').hasClass('active')){
    //         $(".side-block");
    //     }
      }
  
});



homePage();