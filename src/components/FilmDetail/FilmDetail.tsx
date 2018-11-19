import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from "react-redux";

import {mapStateToProps} from '../../reducers';
import FilmDetailDispatch from './FilmDetailDispatch';
import FilmList from '../FilmList/FilmList';
import FilmDetailInfo from '../FilmDetailInfo/FilmDetailInfo';
import {Ceil, Container, PreLoader, Row} from '../../rebass-grid-custom';
import styled from 'styled-components';
import {FilmDetailProps} from "./FilmDetailInterfaces";

const BFilmDetail = styled.div``;
const BFilmDetailFail = styled.div``;

const BFilmDetailSimilar = styled(Ceil)``;
const BFilmDetailSimilarTitle = styled.h2``;
const BFilmDetailSimilarList = styled.div``;


class FilmDetail extends Component<FilmDetailProps> {

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
							<BFilmDetailFail>fail load film detail</BFilmDetailFail>}
						</Ceil>

						{LOAD_FILM_SIMILAR_STATUS === false &&
						<Ceil width={[1]}>
							<PreLoader/>
						</Ceil>
						}

						{LOAD_FILM_SIMILAR_STATUS === true && similarFilms &&
						<BFilmDetailSimilar width={[1]}>
							<BFilmDetailSimilarTitle>similar films</BFilmDetailSimilarTitle>
							<BFilmDetailSimilarList>
								<FilmList filmList={similarFilms}/>
							</BFilmDetailSimilarList>
						</BFilmDetailSimilar>
						}
					</Row>
				</Container>
			</BFilmDetail>
		);
	}
}

export default connect(mapStateToProps, FilmDetailDispatch)(FilmDetail);
