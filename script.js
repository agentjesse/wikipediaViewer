//avoid jQuery
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
      //console.log(URL);
      //console.log(response);

      //clear
      //document.getElementById("results").innerHTML='';
      //select an element by css selector like id or class
      document.querySelector('#results').innerHTML='';

      for(let i = 0; i<response[3].length; i++){
        // // bad way , resort back to this if append child is not possible yet
        // document.getElementById('results').innerHTML += '<div><a target="_blank"href='+ response[3][i]+'>'+response[3][i]+'</a></div>';

        //create div element in dom
        let newDiv = document.createElement("div");
        //assign html inside of it
        newDiv.innerHTML = '<h4>'+ response[1][i] +'</h4><a target="_blank"href='+ response[3][i]+'>'+response[2][i]+'</a>';
        //append div element somewhere
        document.getElementById("results").appendChild(newDiv);

      }

    },
    error(jqXHR,status,errorThrown){
      console.log( jqXHR );
    }
  });


}
