import _ from 'lodash';
import React, {Component} from 'react';
import styled from 'styled-components';
import {Ceil, Row} from '../../rebass-grid-custom';
import {InterfaceFilm} from "../../types/InterfaceFilm";
import FilmItem from '../FilmItem/FilmItem';

const BFilmList = styled.div``;
const BFilmListEmpty = styled.div``;
const BFilmListItems = styled(Row)``;
const BFilmListItem = styled(Ceil)``;

export interface InterfaceFilmListProps {
	filmList: InterfaceFilm[]
}

class FilmList extends Component <InterfaceFilmListProps> {


	public render() {
		const filmList = _.get(this.props, 'filmList');

		return (
			<BFilmList>
				{!filmList ?
					<BFilmListEmpty>data about List film not found</BFilmListEmpty>
					:
					<BFilmListItems>
						{filmList.map((film: InterfaceFilm) => (
							<BFilmListItem
								width={[1, 1 / 2, 1 / 4, 1 / 6]}
								key={`film_${film.id}`}>
								<FilmItem film={film}/>
							</BFilmListItem>
						))}
					</BFilmListItems>
				}
			</BFilmList>
		);
	}
}

export default FilmList;
