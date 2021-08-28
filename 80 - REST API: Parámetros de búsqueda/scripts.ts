type Movie = {
   adult: boolean
   backdrop_path: string
   genre_ids: number[]
   id: number
   original_language: string
   original_title: string
   overview: string
   popularity: number
   poster_path: string
   release_date: string
   title: string
   video: boolean
   vote_average: number
   vote_count: number
}

const baseUrl: string = "https://api.themoviedb.org/3/";
const apiKey: string = "0bce2b3619ac231ad6ce364b6d8015ab";

const url: string = `${baseUrl}movie/top_rated?api_key=${apiKey}`

fetch(url)
   .then((response) => {
      return response.json()
   })
   .then(rta => {
      const movies = rta.results;

      const table = document.getElementById('movies');

      const tbody = table.getElementsByTagName('tbody')[0];


      movies.forEach((item: Movie) => {
         const tr = document.createElement('tr');
         const td = document.createElement('td');
         const text = document.createTextNode(item.title)
         tr.appendChild(td);
         td.appendChild(text)
         tbody.appendChild(tr);
      });
   })
   .catch(error => {
      console.log(error);
   });


