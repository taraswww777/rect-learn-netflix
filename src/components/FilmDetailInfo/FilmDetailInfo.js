import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import _ from "lodash";
import './FilmDetailInfo.scss';


class FilmDetailInfo extends ComponentBEM {

	componentName = 'film-detail-info';

	render() {
		let filmDetail = _.get(this.props, 'filmDetail');

		return (
			<div className={this.block()}>

				{filmDetail &&
				<div className={this.elem('row')}>
					<div className={this.elem('film-detail-block-img')}>
						<img
							className={this.elem('film-detail-img')}
							src={filmDetail.detailPicture}
							title={filmDetail.title}
							alt={filmDetail.title}/>
					</div>
					<div className={this.elem('film-detail-info')}>
						<div className={this.elem('film-detail-info-title')}> {filmDetail.title}

							<span className={this.elem('film-detail-info-rating')}>{filmDetail.rating}</span>
						</div>
						<div
							className={this.elem('film-detail-info-author')}>{filmDetail.author}</div>
						<div className={this.elem('film-detail-info-stat')}>


					<span
						className={this.elem('film-detail-info-year')}>{filmDetail.year}</span>
							{filmDetail.size &&
							<span className={this.elem('film-detail-info-size')}>
					{filmDetail.size.value}
								{filmDetail.size.unit}
					</span>
							}
							<span
								className={this.elem('film-detail-info-genre')}>{filmDetail.genre}</span>
						</div>

						<div
							className={this.elem('film-detail-info-description')}>{filmDetail.detailText}</div>
					</div>
				</div>
				}

			</div>
		);
	}
}

export default FilmDetailInfo;