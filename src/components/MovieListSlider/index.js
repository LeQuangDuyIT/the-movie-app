import React, { useRef } from 'react';

import MovieCard from '../MovieCard';
import styles from './MovieListSlider.module.scss';
import MoveCaret from '../MoveCaret';

const MovieListSlider = ({ sectionTitle, movies, loading }) => {
    const sliderRef = useRef(null);
    const slideRef = useRef(null);

    const handleMoveSlide = step => {
        if (sliderRef.current) {
            const sliderWidth = sliderRef.current.offsetWidth;
            const slideWidth = slideRef.current.offsetWidth;
            const sliderGap = (sliderWidth - 4 * slideWidth) / 3;

            const scrollLength = (slideWidth + sliderGap) * step;
            sliderRef.current.scrollBy({ left: scrollLength, behavior: 'smooth' });
        }
    };

    const sliderElements = movies
        .slice(0, 10)
        .map(movie => <MovieCard key={movie.id} {...movie} slideRef={slideRef} />);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{sectionTitle}</h2>
            <div className={styles.slider} ref={sliderRef}>
                {sliderElements}
                <div className={styles.moveSlide}>
                    <MoveCaret back handleClick={() => handleMoveSlide(-1)} />
                    <MoveCaret next handleClick={() => handleMoveSlide(1)} />
                </div>
            </div>
        </div>
    );
};

export default MovieListSlider;
