
var search = ["Cats", "Huskies", "Cthulhu", "Hockey", "Beer", "Deadpool"];

function displayImage() {

    var search0 = $(this).attr("data-name")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search0 + "&api_key=cQMImmpDl6pBcNUByYr4F55aUUaMHYBU&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response)

          

          for (var g = 0; g < response.data.length; g++) {
              var imgDiv = $("<div class='image'>");
              var imageUrl = response.data[g].images.original.url;
              var imageRating = response.data[g].rating;
              var imgBox = $("<img>");
              var imgRat = $("<p>").text("Rating: " + imageRating);

              imgBox.attr("src", imageUrl);
              imgRat.attr(imageRating);
              imgDiv.append(imgBox);
              imgDiv.append(imgRat);
              $("#images").prepend(imgDiv);

          }
        });
        }

    function renderButtons() {
        $("#buttons-view").empty();

        for (var i = 0; i < search.length; i++) {
            var a = $("<div class='btn btn-dark'>");
            a.addClass("image-btn");
            a.attr("data-name", search[i]);
            a.text(search[i]);
            $("#buttons-view").append(a);
        }
    }

    $("#add-image").on("click", function(event) {
        event.preventDefault();
        var search0 = $("#image-input").val().trim();
        search.push(search0);
        renderButtons();

    });

    $(document).on("click", ".image-btn", displayImage);

    renderButtons();