var baseUrl = "https://api.themoviedb.org/3/";
var apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";
var url = baseUrl + "movie/top_rated?api_key=" + apiKey;
fetch(url)
    .then(function (response) {
    return response.json();
})
    .then(function (rta) {
    console.log(rta);
    var movies = rta.results;
    var table = document.getElementById("movies");
    var tbody = table.getElementsByTagName("tbody")[0];
    movies.forEach(function (item) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var img = document.createElement("img");
        var a = document.createElement("a");
        a.href = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + item.poster_path;
        img.src = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + item.poster_path;
        img.alt = "Imagen de portada";
        img.height = 200;
        var text = document.createTextNode(item.title);
        a.appendChild(img);
        tr.appendChild(td2);
        tr.appendChild(td);
        td.appendChild(text);
        td2.appendChild(a);
        tbody.appendChild(tr);
    });
})["catch"](function (error) {
    console.log(error);
});
