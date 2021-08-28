var baseUrl = "https://api.themoviedb.org/3/";
var apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";
var url = baseUrl + "movie/top_rated?api_key=" + apiKey;
fetch(url)
    .then(function (response) {
    return response.json();
})
    .then(function (rta) {
    var movies = rta.results;
    var table = document.getElementById('movies');
    var tbody = table.getElementsByTagName('tbody')[0];
    movies.forEach(function (item) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var text = document.createTextNode(item.title);
        tr.appendChild(td);
        td.appendChild(text);
        tbody.appendChild(tr);
    });
})["catch"](function (error) {
    console.log(error);
});
