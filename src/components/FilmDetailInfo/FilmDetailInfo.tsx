import _ from 'lodash';
import React, {Component} from 'react';
import {PreLoader} from '../../rebass-grid-custom';
import {InterfaceFilm} from "../../types/InterfaceFilm";
import {
	BFilmDetailInfo,
	BFilmDetailInfo_author, BFilmDetailInfo_detailDescription,
	BFilmDetailInfo_Genre,
	BFilmDetailInfo_header,
	BFilmDetailInfo_leftBoxImg,
	BFilmDetailInfo_leftImg,
	BFilmDetailInfo_Size,
	BFilmDetailInfo_SizeUnit,
	BFilmDetailInfo_SizeValue,
	BFilmDetailInfo_title,
	BFilmDetailInfo_Year,
	FilmDetailInfo_rating
} from "./FilmDetailInfoStyled";

export interface InterfaceFilmDetailInfoProps {
	filmDetail: InterfaceFilm
}

class FilmDetailInfo extends Component<InterfaceFilmDetailInfoProps> {

	public render() {
		const filmDetail = _.get(this.props, 'filmDetail');

		if (!filmDetail) {
			return (
				<BFilmDetailInfo><PreLoader/></BFilmDetailInfo>
			);
		}

		return (
			<BFilmDetailInfo>
				<BFilmDetailInfo_header width={[1]}>
					<BFilmDetailInfo_title>{filmDetail.title}</BFilmDetailInfo_title>
				</BFilmDetailInfo_header>

				<BFilmDetailInfo_leftBoxImg width={[1, 1 / 2]}>

					<FilmDetailInfo_rating>rating: {filmDetail.rating}</FilmDetailInfo_rating>

					<BFilmDetailInfo_author>author: {filmDetail.author}</BFilmDetailInfo_author>

					<BFilmDetailInfo_Year>year: {filmDetail.year}</BFilmDetailInfo_Year>
					{filmDetail.size
					&& <BFilmDetailInfo_Size>size:
						<BFilmDetailInfo_SizeValue>{filmDetail.size.value}</BFilmDetailInfo_SizeValue>
						<BFilmDetailInfo_SizeUnit>{filmDetail.size.unit}</BFilmDetailInfo_SizeUnit>
					</BFilmDetailInfo_Size>
					}
					<BFilmDetailInfo_Genre>genre: {filmDetail.genre}</BFilmDetailInfo_Genre>

					<BFilmDetailInfo_leftImg
						src={filmDetail.detailPicture}
						title={filmDetail.title}
						alt={filmDetail.title}/>
				</BFilmDetailInfo_leftBoxImg>

				<BFilmDetailInfo_detailDescription width={1 / 2}>{filmDetail.detailText}</BFilmDetailInfo_detailDescription>
			</BFilmDetailInfo>
		);
	}
}

export default FilmDetailInfo;
