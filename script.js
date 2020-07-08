
// AJAX call
     $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ",
        method: "GET"
      }).then(function(response) {
        console.log(response)
        const header = document.querySelector("#apod");
        header.setAttribute("style", `background-image:  url(${response.url}); background-position: center; background-repeat: no-repeat; background-size: cover;`);
      });

    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ",	        
        method: "GET"	     
      }).then(function(response) {	     
        console.log(response)
        $("#apod").attr("src", response.url);
    });      

// APOD Button Click
$(document).ready(function () {
    $(".apodBtn").on("click", function(){

    $(".localSkyView").empty();
    $(".apod").text("About APOD");
});

// Local Sky View Button Click
$(".localHubbleViewBtn").on("click", function(){
   
    $(".apod").empty();
    $(".localHubbleView").text("Local Sky View");
});

});
var APIKey = "unepUpoJglDuNOxtOuPToAdKApZ40RRSvfwIHto6";
var quotes = [
  "Space, the final forntier. -Star Trek",
  "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever. -Konstantin Tsiolkovsky",
  "I know the sky is not the limit because there are footprints on the Moon - and I made some of them -Buzz Alrdin",
  "There is no sound in outer space",
  "Never limit yourself because of others limited imagination; never limit others becasuse of your own limited imagination. -Mae Jemison",
  "Earth is a small town with many neighborhoods in a very big universe. -Ron Garan",
  "I looked and I looded but I didn't see God. -Yuri Gagarin",
  "Gravity hurts. -Victor Alexandrow",
  "We are limited only by our imagination. -Ron Garan",
  "In the context of general relativity, space almost is a substance. It can bend and twist and stretch, and probably the best way to thing about space is to just kind of imagine a big piece of rubber that you can pull and twist and bend. -Alan Guth",
  "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe. -Albert Einstein",
  "For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring. - Carl Sagan",
  "By denying scientific principles, one may maintain any paradox. -Galileo Galilei",
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
// $(document).ready(function(){
//      // AJAX call
//      $.ajax({
//         url: "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ",
//         method: "GET"
//       }).then(function(response) {
//         console.log(response)
//         const header = document.querySelector("#apod");
//         header.setAttribute("style", `background-image:  url(${response.url}); background-position: center; background-repeat: no-repeat; background-size: cover;`);
//       });
// })
