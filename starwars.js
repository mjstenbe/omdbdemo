// Make sure the page is loaded
$().ready(function () {
  searchBar();
});

function getMovies(e) {
  var st = $("#searchterm").val();
  // Stop default form submission
  e.preventDefault();
  // These are needed to maintain the browser validitation
  var el = document.getElementById("dataform");
  var chk_status = el.checkValidity();
  el.reportValidity();
  // Query the data
  $.get(
    `https://www.omdbapi.com/?s=${st}&apikey=cbbc6750`,
    function (data, status) {
      // Check for errors in response
      if (data.Response == "False") {
        var html = `<h3>No results or fetch error.</h3>`;
      } else {
        // we are good to go
        var html = `
    <h2>Number of results: ${data.Search.length}</h2>
    <table id="table" class='table table-striped table-bordered'>
        <thead class="table-dark">
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Poster</th>
            </tr>
        </thead>
    `;
        // Parse the result data
        for (var i = 0; i < data.Search.length; i++) {
          // Use placeholder for broken images
          if (data.Search[i].Poster === "N/A")
            data.Search[i].Poster = "placeholder.png";
          html += `<tr>
                    <td>${data.Search[i].Title}</td>
                    <td>${data.Search[i].Year}</td>
                    <td><img src='${data.Search[i].Poster}' class='img-thumbnail' width='200'></td>
                </tr>`;
          // console.log(data.Search[i].Title);
        }
        html += `</table>`;
      }
      // inject the content AFTER the searchbar
      $("#results").html(html);
    }
  );
}

// Display the searchbar
function searchBar() {
  var html = `
  <div class="container mb-5" style="margin-top: 20px">
    <form id="dataform">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Search for: </label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="searchterm" minlength="3" required/>
        </div>

        <div class="col-sm-1">
          <button id="search" type="submit" onclick="getMovies(event)" class="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
  <div id="results"></div>`;
  // Inject the content
  $("#app").html(html);
}
