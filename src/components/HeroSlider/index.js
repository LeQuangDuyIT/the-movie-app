import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MoveCaret from '../MoveCaret';
import styles from './HeroSlider.module.scss';
import { getImgUrl } from '../../utils/helper';
import clsx from 'clsx';

const HeroSlider = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setSlideIndex(prevIndex => {
                let currentIndex = prevIndex + 1;
                if (currentIndex > data.length - 1) {
                    currentIndex = 0;
                }
                return currentIndex;
            });
        }, 7000);
        return () => {
            clearInterval(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleMoveSlide = step => {
        setSlideIndex(prevIndex => {
            let currentIndex = prevIndex + step;
            if (currentIndex > data.length - 1) {
                currentIndex = 0;
            }
            if (currentIndex < 0) {
                currentIndex = data.length - 1;
            }
            return currentIndex;
        });
    };

    const movie = data[slideIndex] || {};

    const backgroundImg = {
        backgroundImage: `url(${getImgUrl(movie.backdrop_path)})`
    };

    return (
        <div className={styles.heroWrap}>
            <div className={styles.heroCore} style={backgroundImg}>
                <div className={styles.movieCard}>
                    <h2 className={styles.movieName}>{movie.title}</h2>
                    <p className={styles.introdue}>{movie.overview}</p>
                    <Link to={`/movie/${movie.id}`} className={styles.viewmoreBtn}>
                        View more
                    </Link>
                    <div className={styles.moveSlide}>
                        <MoveCaret back regular small handleClick={() => handleMoveSlide(-1)} />
                        <MoveCaret next regular small handleClick={() => handleMoveSlide(1)} />
                    </div>
                    <div className={styles.dotRow}>
                        {data.length > 0 &&
                            data.map((movie, index) => (
                                <span
                                    key={movie.id}
                                    className={clsx({
                                        [styles.currentIndex]: index === slideIndex
                                    })}
                                    onClick={() => setSlideIndex(index)}
                                ></span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
