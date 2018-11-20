const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const ROOT = path.join(__dirname + '/build');

app.use(express.static(ROOT));

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
		.filter((film) => film.genre.toLowerCase()
			.indexOf(searchQuery) > -1)
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

function compareFilmRating(filmA, filmB) {
	return filmA.rating - filmB.rating;
}

function compareFilmTitle(filmA, filmB) {
	if (filmA.title < filmB.title) {
		return -1;
	}
	if (filmA.title > filmB.title) {
		return 1;
	}
	return 0;
}

function compareFilmDate(filmA, filmB) {
	return filmA.year - filmB.year;
}

function sortSearchResults(listFilms, sortBy = 'date') {
	if (!listFilms) {
		return listFilms;
	}

	switch (sortBy) {
		case 'rating':
			listFilms.sort(compareFilmRating);
			break;
		case 'date':
			listFilms.sort(compareFilmDate);
			break;
		case 'title':
			listFilms.sort(compareFilmTitle);
			break;
		default:
			listFilms.sort(compareFilmRating);
			break;
	}
	return listFilms;
}

function filterByTitle(listFilms = [], searchQuery = '') {
	const resultListSearch = [];

	listFilms
		.filter((film) => film.title.toLowerCase()
			.indexOf(searchQuery) > -1)
		.map(film => resultListSearch.push(film));

	return resultListSearch;
}

function getListSearchFilm(searchQuery = '', searchBy = 'title', sortBy = 'date') {
	let searchResults = [];

	if (!searchQuery) {
		return searchResults;
	}

	const demoListFilms = loadListFilms();

	switch (searchBy) {
		case 'genre':
			searchResults = filterByGenre(demoListFilms, searchQuery);
			break;
		case 'title':
			searchResults = filterByTitle(demoListFilms, searchQuery);
			break;
		default:
			searchResults = filterByTitle(demoListFilms, searchQuery);
			break;
	}

	return sortSearchResults(searchResults, sortBy);
}


app.get('/', (req, response) => {
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.sendFile(path.join(ROOT + '/index.html'));
});

app.get('/api/film/:id', (req, response) => {
	response.json(getFilmById(req.params.id));
});

app.get('/api/film-genre/:genre', (req, response) => {
	response.json(getListFilmByGenre(req.params.genre));
});

app.get('/api/search/:searchQuery?/:searchBy?/:sortBy', (req, response) => {
	console.log('search req.params: ', req.params);

	let searchQuery = req.params.searchQuery;
	let searchBy = req.params.searchBy || 'title';
	let sortBy = req.params.sortBy || 'date';

	response.json(getListSearchFilm(searchQuery.toLowerCase(), searchBy.toLowerCase(), sortBy.toLowerCase()));
	response.end();
});

app.get('/*', (req, response) => {
	console.log('404 req.params: ', req.params);
	// response.send('404');
	// response.redirect('/', 301);
	// response.end();
});


app.listen(PORT, () => {
	console.log('server run PORT:', PORT);
});

