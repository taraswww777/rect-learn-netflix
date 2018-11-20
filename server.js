
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const ROOT = path.join(__dirname + '/build');

app.use(express.static(ROOT));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


function loadListFilms() {
	return require('./src/demoListFilms');
}

function filterById(listFilms = [], filmId) {
	let resultListSearch = {};
	filmId = filmId.toLowerCase();

	listFilms
		.filter((film) => film.id.toLowerCase()
			.indexOf(filmId) > -1)
		.map(film => resultListSearch = film);

	return resultListSearch;
}
function filterByGenre(listFilms = [], searchQuery) {
	const resultListSearch = [];
	listFilms
		.filter((film) => film.genre.toLowerCase().indexOf(searchQuery) > -1)
		.map(film => resultListSearch.push(film));

	return resultListSearch;
}

function getFilmById(filmId) {
	const demoListFilms = loadListFilms();
	return filterById(demoListFilms, filmId);
}

function getListFilmByGenre(filmGenre) {
	const demoListFilms = loadListFilms();
	return filterByGenre(demoListFilms, filmGenre);
}


app.get('/', (req, response) => {
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.sendFile(path.join(ROOT + '/index.html'));
});

app.get('/api/film/:id', (req, response) => {
	response.json(getFilmById(req.params.id));
});

app.get('/api/film-genre/:genre', (req, response) => {
	console.log('req.params: ', req.params);
	response.json(getListFilmByGenre(req.params.genre));
});

app.get('/*', (req, response) => {
	// console.log('req.params: ', req.params);
	// response.redirect('/', 301);
	// response.end();
});


app.listen(PORT, () => {
	console.log('server run PORT:', PORT);
});

