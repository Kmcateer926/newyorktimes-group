$(document).ready(function() {
    console.log("ready");
    $("#search").on("click", function(event){
        event.preventDefault();
        var searchTerm = $("#search-term").val();
        var recordsRetrieved = $("#records-retrieved").val();
        var startYear = $("#start-year").val();
        var endYear = $("#end-year").val();
        console.log(searchTerm);
        console.log(recordsRetrieved);
        console.log(startYear);
        console.log(endYear);
        console.log("search-clicked");
        var apiKey = "NgPE5quI26d2VIxHFxAwkAJUy1mps2kA"
        var queryURL="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response.response.docs)
            console.log(response)
            var docs = response.response.docs;
            for (var i = 0; i < docs.length; i++){
                console.log(docs[i]);
                var headlineEl = $("<h3>").text(docs[i].headline.main)
                $("#articles").append(headlineEl);
            };
        });
    });
    $("#clear-results").on("click", function(event){
        event.preventDefault();
        $("#search-term").val("");
        $("#records-retrieved").val();
        console.log("clear-results");
    });
});