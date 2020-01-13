/**
 * function getData() fro fetch data from yts.am/api
 */

async function getMovies(url) {
	const response = await fetch(url);
	const data = await response.json();

	return data;
}