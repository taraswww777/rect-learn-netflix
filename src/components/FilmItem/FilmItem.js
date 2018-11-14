import React from 'react';
import './FilmItem.scss';
import { Link } from 'react-router-dom';
import ComponentBEM from '../ComponentBEM.js';

class FilmItem extends ComponentBEM {
	componentName = 'film-item';

	render() {
	  return (
	    !this.props.film
	      ? <div className={this.block()}>
					<div>
						data about film not found
					</div>
				</div>
	      :				<Link className={this.block()} to={`/film/${this.props.film.id}`}>
					<img
						className={this.elem('cover')}
						src={this.props.film.previewPicture}
						alt={this.props.film.title}
						title={this.props.film.title}/>
					<div className={this.elem('info')}>
						<div className={this.elem('title')}>{this.props.film.title}</div>
						<div className={this.elem('year')}>{this.props.film.year}</div>
						<div className={this.elem('genre')}>{this.props.film.genre}</div>
					</div>
				</Link>
	  );
	}
}

export default FilmItem;
