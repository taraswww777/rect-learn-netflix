import React, { Component } from 'react';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';

import { mapStateToProps } from '../../reducers/index';
import FilmDetailDispatch from './FilmDetailDispatch';
import FilmList from '../FilmList/FilmList';
import FilmDetailInfo from '../FilmDetailInfo/FilmDetailInfo';
import { Ceil, Container, PreLoader, Row } from '../../rebass-grid-custom';
import styled from 'styled-components';

const BFilmDetail = styled.div``;
const BFilmDetail_fail = styled.div``;

const BFilmDetail_similar = styled(Ceil)``;
const BFilmDetail_similarTitle = styled.h2``;
const BFilmDetail_similarList = styled.div``;


class FilmDetail extends Component {

	componentWillMount() {
		this.props.loadDetailById(this.props.match.params.id);
	}

	componentDidUpdate() {
		// Вот тут не факт что правильно сделано
		const lastFilmId = _.get(this.props, 'store.ReducerFilms.filmId');
		const currentFilmId = _.get(this.props, 'match.params.id');
		if (currentFilmId !== lastFilmId && currentFilmId && lastFilmId) {
			// если отдельно не обновить текущий фильм, то происходит зацикливание
			this.props.setCurrentFilmDetailById(currentFilmId);
			this.props.loadDetailById(currentFilmId);
		}
	}

	render() {
		const filmDetail = _.get(this.props, 'store.ReducerFilms.filmDetail');
		const similarFilms = _.get(this.props, 'store.ReducerFilms.similarFilms');

		const LOAD_FILM_DETAIL_STATUS = _.get(this.props, 'store.ReducerFilms.LOAD_FILM_DETAIL_STATUS');
		const LOAD_FILM_SIMILAR_STATUS = _.get(this.props, 'store.ReducerFilms.LOAD_FILM_SIMILAR_STATUS');

		return (
			<BFilmDetail>

				<Container>
					<Row>
						<Ceil width={[1]}>
							{LOAD_FILM_DETAIL_STATUS === false && <PreLoader/>}
							{LOAD_FILM_DETAIL_STATUS === true && filmDetail && <FilmDetailInfo filmDetail={filmDetail}/>}
							{LOAD_FILM_DETAIL_STATUS === true && !filmDetail &&
							<BFilmDetail_fail>fail load film detail</BFilmDetail_fail>}
						</Ceil>

						{LOAD_FILM_SIMILAR_STATUS === false &&
						<Ceil width={[1]}>
							<PreLoader/>
						</Ceil>
						}

						{LOAD_FILM_SIMILAR_STATUS === true && similarFilms &&
						<BFilmDetail_similar width={[1]}>
							<BFilmDetail_similarTitle>similar films</BFilmDetail_similarTitle>
							<BFilmDetail_similarList>
								<FilmList filmList={similarFilms}/>
							</BFilmDetail_similarList>
						</BFilmDetail_similar>
						}
					</Row>
				</Container>
			</BFilmDetail>
		);
	}
}

export default connect(mapStateToProps, FilmDetailDispatch)(FilmDetail);
