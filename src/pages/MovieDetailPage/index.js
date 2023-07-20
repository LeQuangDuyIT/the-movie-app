import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './MovieDetailPage.module.scss';
import APIServices from '../../services/APIServices';
import Loader from '../../components/Loader';
import { getImgUrl } from '../../utils/helper';

const BoardDetailPage = () => {
    const [movieDetail, setMovieDetail] = useState({});
    const { movieId } = useParams();

    const [loading, setLoading] = useState(false);

    const onFetchDetail = async () => {
        setLoading(true);
        try {
            const data = await APIServices.getMovieById(movieId);
            setMovieDetail(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        onFetchDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { title, release_date, poster_path, overview, homepage } = movieDetail;
    const posterUrl = getImgUrl(poster_path);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.overview}>
                <img src={posterUrl} alt={title} />
                <div className={styles.details}>
                    <h1 className={styles.movieName}>{title}</h1>
                    <p>{release_date}</p>
                    <p>Thể loại</p>
                    <p className={styles.introduce}>{overview}</p>
                    <Link to={homepage} target="_blank" className={styles.visitWebBtn}>
                        Visit the website
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BoardDetailPage;
