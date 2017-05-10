// When user hits the search-btn
$("#city-search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var citySearched = $("#city-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + citySearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});


function renderBooks(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<p>Date: " + data[i].date + "</p>");
      div.append("<p>City: " + data[i].city + "</p>");
      div.append("<p>State: " + data[i].state + "</p>");
      div.append("<p>Shape: " + data[i].shape + "</p>");
      div.append("<p>Duration: " + data[i].duration + "</p>");
      div.append("<p>Summary: " + data[i].summary + "</p>");
      

      $("#stats").append(div);

    }//for loop
  }//if statement
}//function