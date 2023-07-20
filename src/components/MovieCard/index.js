import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieCard.module.scss';
import { getImgUrl } from '../../utils/helper';

const MovieCard = ({ id, title, poster_path, slideRef }) => {
    const imageURL = getImgUrl(poster_path);

    return (
        <Link to={`/movie/${id}`} className={styles.cardWrap} ref={slideRef}>
            <div className={styles.movieCard}>
                <img src={imageURL} alt={title} />
            </div>
        </Link>
    );
};

export default MovieCard;
