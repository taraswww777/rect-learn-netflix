import React from 'react';
import _ from 'lodash';
import './FilmDetail.scss';
import connect from 'react-redux/es/connect/connect';
import ComponentBEM from '../ComponentBEM.js';
import { mapStateToProps } from '../../reducers/index';
import FilmDetailDispatch from './FilmDetailDispatch';
import FilmList from '../FilmList/FilmList';
import FilmDetailInfo from '../FilmDetailInfo/FilmDetailInfo';
import Loader from '../Loader/Loader';

class FilmDetail extends ComponentBEM {
	componentName = 'film-detail';

	componentWillMount() {
	  console.log('componentWillMount');
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
			<div className={this.block()}>

				<div className={this.elem('container')}>
					<div className={this.elem('row')}>
						<div className={this.elem('col-12')}>
							{LOAD_FILM_DETAIL_STATUS === false && <Loader/>}
							{LOAD_FILM_DETAIL_STATUS === true && filmDetail && <FilmDetailInfo filmDetail={filmDetail}/>}
							{LOAD_FILM_DETAIL_STATUS === true && !filmDetail && <div>fail load film detail</div>}
						</div>

						{LOAD_FILM_SIMILAR_STATUS === false
						&& <div className={this.elem('col-12')}>
							<Loader/>
						</div>
						}

						{LOAD_FILM_SIMILAR_STATUS === true && similarFilms
						&& <div className={this.elem('col-12')}>

							<h2 className={this.elem('similar-title')}>similar films</h2>
							< div className={this.elem('similar-list')}>
								<FilmList filmList={similarFilms}/>
							</div>
						</div>
						}
					</div>
				</div>
			</div>
	  );
	}
}

export default connect(mapStateToProps, FilmDetailDispatch)(FilmDetail);
