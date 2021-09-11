//https://gateway.marvel.com:443/v1/public/comics?apikey=eff385ca37899c750f2573e1fbd9c1a0&hash=1a941ecc90191a0618bfbd522a370136&ts=1
const baseUrl = "https://gateway.marvel.com:443/v1";
const apikey = "eff385ca37899c750f2573e1fbd9c1a0";
const hash = "1a941ecc90191a0618bfbd522a370136";
const restUrl = `apikey=${apikey}&hash=${hash}&ts=1`;
// const restUrl = 'apikey=' + apikey + '&' + 'hash=' + hash + '&' + 'ts=1';

const getComics = () => {
	return fetch(`${baseUrl}/public/comics?${restUrl}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		});
};

const sumarComics = async () => {
	const rta = await getUsers();

	const children = await getChildren(rta);

	const parents = await getPrents(children);
};
