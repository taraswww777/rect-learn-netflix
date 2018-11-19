import {MatchInterface} from "../../types/MatchInterface";

export interface FilmDetailProps extends MatchInterface {
	loadDetailById: Function;
	setCurrentFilmDetailById:Function;
	match: {
		isExact: Boolean
		params: {
			id: number
		}
		path: String
		url: String
	}
}

