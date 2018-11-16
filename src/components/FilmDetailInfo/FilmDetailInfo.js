import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Ceil, PreLoader, Row } from '../../rebass-grid-custom';

const BFilmDetailInfo = styled(Row)``;

const BFilmDetailInfo_header = styled(Ceil)``;
const BFilmDetailInfo_title = styled.h1``;

const BFilmDetailInfo_leftBoxImg = styled(Ceil)``;
const BFilmDetailInfo_leftImg = styled.img`
	max-width: 100%;
`;

const FilmDetailInfo_rating = styled.span` padding: 5px;`;
const BFilmDetailInfo_author = styled.span`padding: 5px;`;
const BFilmDetailInfo_Year = styled.span` padding: 5px;`;
const BFilmDetailInfo_Size = styled.span` padding: 5px;`;
const BFilmDetailInfo_SizeValue = styled.span` `;
const BFilmDetailInfo_SizeUnit = styled.span` `;
const BFilmDetailInfo_Genre = styled.span` padding: 5px;`;

const BFilmDetailInfo_detailDescription = styled(Ceil)``;


class FilmDetailInfo extends Component {

	render() {
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
