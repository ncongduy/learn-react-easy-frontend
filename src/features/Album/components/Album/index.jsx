import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
	album: PropTypes.object.isRequired,
};

function Album(props) {
	const { album } = props;

	return (
		<div className='album'>
			<div className='album__thumbnail'>
				<img src={album.thumnailUrl} alt={album.nameAlbum} />
			</div>
			<p className='album__name'>{album.nameAlbum}</p>
		</div>
	);
}

export default Album;
