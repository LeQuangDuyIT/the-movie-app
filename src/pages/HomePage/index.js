import React from 'react';

import style from './HomePage.module.scss';
import useFetchMoviesByType from '../../hooks/useFetchMoviesByType';
import MovieListSlider from '../../components/MovieListSlider';
import { PAGE_NAV } from '../../utils/constants';
import Loader from '../../components/Loader';
import HeroSlider from '../../components/HeroSlider';

const HomePage = () => {
    const { data: nowPlayingData, loading: nowPlayingLoading } =
        useFetchMoviesByType('now_playing');
    const { data: upComingData, loading: upComingLoading } = useFetchMoviesByType('upcoming');
    const { data: popularData, loading: popularLoading } = useFetchMoviesByType('popular');
    const { data: topRatedData, loading: topRatedLoading } = useFetchMoviesByType('top_rated');

    const datasLoading = nowPlayingLoading || upComingLoading || popularLoading || topRatedLoading;
    if (datasLoading) {
        return <Loader />;
    }
    
    const heroSliderData = [...nowPlayingData].slice(0, 7) || [];

    return (
        <div className={style.container}>
            <HeroSlider data={heroSliderData} />
            <MovieListSlider
                sectionTitle={PAGE_NAV.NOW_PLAYING.title}
                movies={nowPlayingData}
                loading={nowPlayingLoading}
            />
            <MovieListSlider
                sectionTitle={PAGE_NAV.POPULAR.title}
                movies={popularData}
                loading={popularLoading}
            />
            <MovieListSlider
                sectionTitle={PAGE_NAV.TOP_RATED.title}
                movies={topRatedData}
                loading={topRatedLoading}
            />
            <MovieListSlider
                sectionTitle={PAGE_NAV.UP_COMING.title}
                movies={upComingData}
                loading={upComingLoading}
            />
        </div>
    );
};

export default HomePage;
