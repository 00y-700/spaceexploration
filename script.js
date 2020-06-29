$(document).ready(function(){
     // AJAX call
     $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ",
        method: "GET"
      }).then(function({url}) {
        console.log(url)
        const header = document.querySelector("#apod");
        header.setAttribute("style", `background-image:  url(${url}); background-position: center; background-repeat: no-repeat; background-size: cover;`);
      });
})