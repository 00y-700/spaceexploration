var spaceMission = $(".spaceMission");
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

    $(".mainBlock-Contents").empty();
    $(".apod").text("About APOD");
});

// Local Hubble View Button Click
$(".localHubbleViewBtn").on("click", function(){
   
    $(".mainBlock-Contents").empty();
    $(".localHubbleView").text("Local Sky View");
});

// Near Earth Objects
$(".newEarthObjectsBtn").on("click", function(){
   
    $(".mainBlock-Contents").empty();
    $(".nearEarthObjects").text("Near Earth Objects");
    
});

// Mars Weather
$(".marsWeatherBtn").on("click", function(){
   
    $(".mainBlock-Contents").empty();
    $(".marsWeather").text("Mars Weather");
    
});

// Space Mission (Started Working - Yakini)
$(".spaceMissionBtn").on("click", function(){
   
    $(".mainBlock-Contents").empty();
    spaceMission.text("Space Mission");
    var spaceMissionDetails = $("<p class = details>").text("NASA has successfully launched over 200 crewed flights. Two have ended in failure, STS-51-L (the Challenger disaster) in 1986, and STS-107 (the Columbia disaster) in 2003. (Apollo 1 in 1967 lost three crew members but never launched.)");
    
    var table= $("<table><thead><tr><th>Program</th><th>Start Date</th><th>End Date</th><th>No. of launched crewed missions</th><th>Notes</th> </tr> </thead> ");
    var tableContents1 = $("<tbody><tr><td>Mercury Program</td><td>1959</td><td>1963</td><td>6</td><td>First U.S. crewed program</td> </tr>");
    var tableContents2 = $("<tr><td>Mercury Program</td><td>1959</td><td>1963</td><td>6</td><td>First U.S. crewed program</td> </tr>");
    var tableContents3 = $("<tr><td>Mercury Program</td><td>1959</td><td>1963</td><td>6</td><td>First U.S. crewed program</td> </tr>");
    var tableContents4 = $("<tr><td>Mercury Program</td><td>1959</td><td>1963</td><td>6</td><td>First U.S. crewed program</td> </tr>");
    var tableContents5 = $("<tr><td>Mercury Program</td><td>1959</td><td>1963</td><td>6</td><td>First U.S. crewed program</td> </tr>");
    var tableContents6 = $("<tr><td>Mercury Program</td><td>1959</td><td>1963</td><td>6</td><td>First U.S. crewed program</td> </tr>");
    var tableContents7 = $("<tr><td>Mercury Program</td><td>1959</td><td>1963</td><td>6</td><td>First U.S. crewed program</td> </tr> </tbody> </table>");

    //     <table>
//     <thead>
//       <tr>
//           <th>Name</th>
//           <th>Item Name</th>
//           <th>Item Price</th>
//       </tr>
//     </thead>

//     <tbody>
//       <tr>
//         <td>Alvin</td>
//         <td>Eclair</td>
//         <td>$0.87</td>
//       </tr>
//       <tr>
//         <td>Alan</td>
//         <td>Jellybean</td>
//         <td>$3.76</td>
//       </tr>
//       <tr>
//         <td>Jonathan</td>
//         <td>Lollipop</td>
//         <td>$7.00</td>
//       </tr>
//     </tbody>
//   </table>
    
    spaceMission.append(spaceMissionDetails);
    table.append(tableContents1);
    table.append(tableContents2);
    table.append(tableContents3);
    table.append(tableContents4);
    table.append(tableContents5);
    table.append(tableContents6);
    table.append(tableContents7);
    spaceMission.append(table);
});

// Space Information
$(".spaceInfoBtn").on("click", function(){
   
    $(".mainBlock-Contents").empty();
    $(".spaceInfo").text("Space Information");

});


});

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

