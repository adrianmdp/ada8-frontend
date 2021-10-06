type Movie = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

const baseUrl: string = "https://api.themoviedb.org/3/";

const apiKey: string = "0bce2b3619ac231ad6ce364b6d8015ab";

const url: string = `${baseUrl}movie/top_rated?api_key=${apiKey}`;

fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((rta) => {
		console.log(rta);
		const movies = rta.results;
		const table = document.getElementById("movies");
		const tbody = table.getElementsByTagName("tbody")[0];
		movies.forEach((item: Movie) => {
			const tr = document.createElement("tr");
			const td = document.createElement("td");
			const td2 = document.createElement("td");
			const img = document.createElement("img");
			const a = document.createElement("a");
			a.href = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path}`;
			img.src = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path}`;
			img.alt = "Imagen de portada";
			img.height = 200;
			const text = document.createTextNode(item.title);
			a.appendChild(img);
			tr.appendChild(td2);
			tr.appendChild(td);
			td.appendChild(text);
			td2.appendChild(a);
			tbody.appendChild(tr);
		});
	})
	.catch((error) => {
		console.log(error);
	});
