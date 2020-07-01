
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
=======
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

