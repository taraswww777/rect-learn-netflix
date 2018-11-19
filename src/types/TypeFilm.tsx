export interface FilmSize {
	value: number;
	unit: string;
}

export interface TypeFilm {
	id: string;
	title: string;
	rating: number;
	year: number;
	index: number;
	guid: number;
	genre: number;
	isActive: boolean;
	previewPicture: string;
	detailPicture: string;
	date: string;
	tags: [];
	range: number;
	size: FilmSize;
	previewText: string;
	detailText: string
}
