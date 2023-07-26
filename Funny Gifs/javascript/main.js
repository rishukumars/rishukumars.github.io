//1.Grab the input from the search box(value)

document.querySelector(".js-go").addEventListener('click',function () {
 
var query = document.querySelector(".js-userinput").value;

pushToDisplay(query);

});

function pushToDisplay(query){
    var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=lcZMsaCdOU3EQX3aRQzOKeTJNbXdiAxq";


    //Make an HTTP request using XML HttpsRequest()
    
    const HttpRequest = new XMLHttpRequest();
    HttpRequest.open('GET' , url)
    HttpRequest.send();
    
    // console.log(HttpRequest);
    
    HttpRequest.addEventListener('load', function (e){
    
        var data = e.target.response;
        pushToDOM(data);
    
    
    
    });
    
    
    
    
    
    
    
    
    
    
    // 3.Show GIFs they want
    
    function pushToDOM(input){
     
        var response = JSON.parse(input);
    
        var container = document.querySelector(".js-container");
        //CHRIS forEach loop
        var imageURLs = response.data;
        imageURLs.forEach(function (image){
            var one_image = image.images.fixed_height.url;
            console.log(one_image);
             
        container.innerHTML = container.innerHTML + "<img src=\"" + one_image + "\">";
        });
        //My loop
      
        // var i=0;
        // while(i<50){
        //     var container = document.querySelector(".js-container");
        //     var imageURL = response.data[i].images.fixed_height.url;
            
        // container.innerHTML = container.innerHTML + "<img src=\"" + imageURL + "\">";
        //     i++;
        // }
    
    }
    
}
