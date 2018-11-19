export interface InterfaceFilmSize {
	value: number;
	unit: string;
}

export interface InterfaceFilm {
	id: string;
	title: string;
	author: string;
	rating: number;
	year: number;
	index: number;
	guid: number;
	genre: string;
	isActive: boolean;
	previewPicture: string;
	detailPicture: string;
	date: string;
	tags: string[];
	range: number;
	size: InterfaceFilmSize;
	previewText: string;
	detailText: string
}
