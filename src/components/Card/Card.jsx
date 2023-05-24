import React, {Component} from 'react';
import defImage from '../../img/bp.jpeg'
import defImageStars from '../../img/stars.png'
import PropTypes from 'prop-types'
import AverRatingContainer from "../AverRating/AverRatingContainer";
import SetRatingContainer from "../SetRating/SetRatingContainer";

class Card extends Component {
    render() {
        const titleLength = this.props.Movie.title.split('').length
        return (
            <div className="movie-card-container">
                <div className="aver-rating-container">
                    <AverRatingContainer VoteAverage={this.props.Movie.vote_average}/>
                </div>
                <div className="movie-card__image-container">
                    <img
                        src={this.props.Movie.poster_path || defImage}
                        alt="Movie Poster"
                    />
                </div>
                <div className="movie-card">
                    <div className="movie-card__title-container">
                        <div className="movie-card__title"
                             style={{fontSize: titleLength > 40 ? "14px" : "20px"}}>{this.props.Movie.title}</div>
                        <div
                            className="movie-card__release-date">{this.props.Movie.release_date || "date: no info"}</div>
                        <div className="movie-card__genres-container">
                            Genres:
                            {(this.props.Movie.genres && this.props.Movie.genres.map((item, index) => (
                                <div className="movie-card__genres">{item.name}</div>
                            ))) || <div className="movie-card__genres">plugs</div>}
                        </div>
                    </div>
                    <div className="movie-card__description">
                        {this.props.Movie.overview || "no description"}
                    </div>
                    <div className="movie-card__my-rating">
                        <SetRatingContainer Movie={this.props.Movie} />
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    Movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        release_date: PropTypes.string,
        genre_ids: PropTypes.arrayOf(PropTypes.number),
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        poster_path: PropTypes.string,
        rating: PropTypes.number,
        success_vote: PropTypes.bool
    })
}

Card.defaultProps = {
    Movie: {
        rating: 2,
        success_vote: false
    }
}

export default Card;