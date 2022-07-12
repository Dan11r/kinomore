import {IMovieRating} from '@/types/IMovie';
import {FC, memo} from 'react'
import {FiStar} from 'react-icons/fi';
import styles from './MovieRating.module.scss'

interface MovieRatingProps {
    rating: IMovieRating | undefined;
}

export const MovieRating = memo<MovieRatingProps>(({rating}) => {
    return (
        <>
            {rating &&
                <span className={styles.rating}>
                    <FiStar/>
                    {rating?.kp ? rating.kp : rating?.imdb}
                </span>
            }
        </>
    )
})

MovieRating.displayName = 'MovieRating'