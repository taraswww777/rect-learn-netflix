import _ from 'lodash';
import React, {Component} from 'react';
import styled from 'styled-components';
import {Ceil, Row} from '../../rebass-grid-custom';
import {InterfaceFilm} from "../../types/InterfaceFilm";
import FilmItem from '../FilmItem/FilmItem';

const BFilmList = styled.div``;
const BFilmList_Empty = styled.div``;
const BFilmList_List = styled(Row)``;
const BFilmList_ListItem = styled(Ceil)``;

export interface InterfaceFilmListProps {
	filmList: InterfaceFilm[]
}

class FilmList extends Component <InterfaceFilmListProps> {


	public render() {
		const filmList = _.get(this.props, 'filmList');

		return (
			<BFilmList>
				{!filmList ?
					<BFilmList_Empty>data about List film not found</BFilmList_Empty>
					:
					<BFilmList_List>
						{filmList.map(film => (
							<BFilmList_ListItem
								width={[1, 1 / 2, 1 / 4, 1 / 6]}
								key={`film_${film.id}`}>
								<FilmItem film={film}/>
							</BFilmList_ListItem>
						))}
					</BFilmList_List>
				}
			</BFilmList>
		);
	}
}

export default FilmList;
