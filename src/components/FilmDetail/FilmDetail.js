import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './FilmDetail.scss';
import connect from "react-redux/es/connect/connect";
import {mapStateToProps, mapStateToDispatchers} from '../../actions/reducer';
import FilmItem from "../FilmItem/FilmItem";


class FilmDetail extends ComponentBEM {

	componentName = 'film-detail';

	componentDidMount() {// выывается при монтировании
		if (!this.props.state.filmDetail) {
			this.props.loadListFilmByAlias(this.props.match.params.alias);
		}
	}

	componentDidUpdate() { // выывается при обновлении props
		if (this.props.state.filmDetail) {
			if (!this.props.state.similarFilms) {
				this.props.loadSimilarFilmsByGenre(this.props.state.filmDetail.genre);
			}
		}
	}

	render() {
		return (
			<div className={this.block()}>

				{this.props.state.filmDetail &&
				<div className={this.elem('film-detail')}>
					<div className={this.elem('film-detail-block-img')}>
						<img className={this.elem('film-detail-img')} src={this.props.state.filmDetail.img.src}
						     title={this.props.state.filmDetail.title}
						     alt={this.props.state.filmDetail.title}/>
					</div>
					<div className={this.elem('film-detail-info')}>
						<div className={this.elem('film-detail-info-title')}> {this.props.state.filmDetail.title}

							<span className={this.elem('film-detail-info-rating')}>{this.props.state.filmDetail.rating}</span>
						</div>
						<div className={this.elem('film-detail-info-author')}>{this.props.state.filmDetail.author}</div>
						<div className={this.elem('film-detail-info-stat')}>


							<span className={this.elem('film-detail-info-year')}>{this.props.state.filmDetail.year}</span>
							<span
								className={this.elem('film-detail-info-size')}>{this.props.state.filmDetail.size.value} {this.props.state.filmDetail.size.unit}</span>
							<span className={this.elem('film-detail-info-genre')}>{this.props.state.filmDetail.genre}</span>
						</div>

						<div className={this.elem('film-detail-info-description')}>{this.props.state.filmDetail.description}</div>
					</div>

				</div>
				}

				{this.props.state.similarFilms &&
				<div className={this.elem('similar')}>
					<div className={this.elem('container')}>
						<div className={this.elem('row')}>
							<h2 className={this.elem('similar-title')}>similar films</h2>

							<div className={this.elem('similar-list')}>
								{this.props.state.similarFilms.map((film) => (
										<div className={this.elem('similar-item')}>
											<FilmItem film={film}/>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
				}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapStateToDispatchers)(FilmDetail);