$(document).ready(function() {

  // once submit button is clicked, plug the searchItem in url
  $('#button').on('click', function(event) {
    event.preventDefault();

    // varibale that takes the searched item from submit
    var searchItem = $('#query').val()
    // run getRequest function
    getRequest(searchItem);
      // empty form
      $('#query').val("");
    });
  });

  // define getRequest function that takes requests data from omdb server
  function getRequest(searchItem) {
    // define search and data type parameters
    var params = {
      part: 'snippet',
      key: 'AIzaSyCgMTSISXIJ_MsPistaw5m-JfILMKtJmBs',
      q: searchItem
    };
    // define url of the server website
    url = 'https://www.googleapis.com/youtube/v3/search';
    // request to get results as JSON from server
    $.getJSON(url, params, function(data){
      for (var i = 0; i <= data.items.length; i++) {
        var responseData = data.items[i];
        // variables for video link (video id) and thumbnails url
        var thumbnailsUrl = responseData.snippet.thumbnails.medium.url;
        var videoLink = "https://www.youtube.com/watch?v=" + responseData.id.videoId;

        showResults(videoLink, thumbnailsUrl);
        }
      });
  }

  // define showResults function the inserts searchItem result into search-results div
  function showResults(videoLink, thumbnailsUrl){
  var result = '<a href=' + videoLink + '>' + '<img src=' + thumbnailsUrl + '></a>';
    // append the information into search-results div.
  $('#search-results').append(result);
  }
