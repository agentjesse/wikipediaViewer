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
      console.log(URL);
      console.log(response);
      for(let i = 0; i<response[3].length; i++){
        // // bad way , resort back to this if append child is not possible yet
        // document.getElementById('results').innerHTML += '<div><a target="_blank"href='+ response[3][i]+'>'+response[3][i]+'</a></div>';


        let newDiv = document.createElement("div");
        newDiv.innerHTML = '<div><a target="_blank"href='+ response[3][i]+'>'+response[3][i]+'</a></div>';
        // let newContent = document.createTextNode("Hi there and greetings!");
        // newDiv.appendChild(newContent); //add the text node to the newly created div.
        // add the newly created element and its content into the DOM
        let currentDiv = document.getElementById("results");
        currentDiv.appendChild(newDiv);

      }

    },
    error(jqXHR,status,errorThrown){
      console.log( jqXHR );
    }
  });


}
