// AJAX call
     $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ",
        method: "GET"
      }).then(function(response) {
        console.log(response)
        const header = document.querySelector("#apod");
        header.setAttribute("style", `background-image:  url(${response.url}); background-position: center; background-repeat: no-repeat; background-size: cover;`);
      });
var quotes = [
  "Just Do It -NIKE",
  "Space, the final forntier. -Star Trek",
  "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever. -Konstantin Tsiolkovsky",
  "I know the sky is not the limit because there are footprints on the Moon - and I made some of them -Buzz Alrdin",
  "There is no sound in outer space",
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}