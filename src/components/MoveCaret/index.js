import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';

import styles from './MoveCaret.module.scss';

const MoveCaret = ({ back, next, handleClick, regular, small }) => {
    return (
        <button className={clsx(styles.circle, { [styles.regular]: regular }, {[styles.small]: small})} onClick={handleClick}>
            <FontAwesomeIcon
                icon={(back && faAngleLeft) || (next && faAngleRight)}
                className={styles.caret}
            />
        </button>
    );
};

MoveCaret.propTypes = {
    next: PropTypes.bool,
    back: PropTypes.bool,
    isHero: PropTypes.bool,
    handleClick: PropTypes.func
};

// MoveCaret.defaultProps = {
//     next: false,
//     back: false
// };

export default MoveCaret;
