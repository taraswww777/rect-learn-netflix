import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import FilmItem from '../FilmItem/FilmItem';
import { Ceil, Row } from '../../rebass-grid-custom';

const BFilmList = styled.div``;
const BFilmList_Empty = styled.div``;
const BFilmList_List = styled(Row)``;
const BFilmList_ListItem = styled(Ceil)``;

class FilmList extends Component {


	render() {
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
