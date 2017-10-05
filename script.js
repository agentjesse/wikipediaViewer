//avoid jQuery
function search(){
  //assign the searchField value to somewhere
  let searchValue = document.getElementById('searchField').value;
  URL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
  + encodeURIComponent(searchValue) + "&format=json";

  $.ajax({
    url: URL,
    type: 'GET',
    //... random solution, change dataType to jsonp instead of json....fuck
    dataType: 'jsonp',
    success(response){
      console.log(response);
    },
    error(jqXHR,status,errorThrown){
      console.log( jqXHR );
    }
  });


}
