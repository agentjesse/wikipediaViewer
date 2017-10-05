//n.t.s. avoid jQuery if possible
function search(){
  //assign the searchField value to somewhere
  let searchValue = document.getElementById('searchField').value;
  URL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
  + encodeURIComponent(searchValue) + "&format=json";

  $.ajax({
    url: URL,
    type: 'GET',
    dataType: 'jsonp',
    success(response){
      console.log(URL);
      console.log(response);
      for(let i = 0; i<response[3].length; i++){
        // bad way?
        document.getElementById('results').innerHTML += '<div><a target="_blank"href='+ response[3][i]+'>'+response[3][i]+'</a></div>';

      }

    },
    error(jqXHR,status,errorThrown){
      console.log( jqXHR );
    }
  });


}
