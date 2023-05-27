import React, {Component} from 'react';
import defImage from "../../assets/bp.jpeg";
import defImageStars from "../../assets/stars.png";

class CardLoader extends Component {
    render() {
        return (
            <div className="movie-card-container">
                <div className="movie-card__image-container">
                    <img
                        src={defImage}
                        alt="Movie Poster"
                    />
                </div>
                <div className="movie-card">
                    <div className="movie-card__title-container">
                        <div className="movie-card__title">loading...</div>
                        <div
                            className="movie-card__release-date">loading...</div>
                        <div className="movie-card__genres-container">
                            loading...
                        </div>
                    </div>
                    <div className="movie-card__description">
                        loading...
                    </div>
                    <div className="movie-card__my-rating">
                        {/*<div className="movie-card__rating-stars">*/}
                        {/*    <span className="movie-card__star--filled"></span>*/}
                        {/*    <span className="movie-card__star--filled"></span>*/}
                        {/*    <span className="movie-card__star--filled"></span>*/}
                        {/*    <span className="movie-card__star--half"></span>*/}
                        {/*    <span className="movie-card__star--empty"></span>*/}
                        {/*    <span className="movie-card__star--empty"></span>*/}
                        {/*    <span className="movie-card__star--empty"></span>*/}
                        {/*    <span className="movie-card__star--empty"></span>*/}
                        {/*    <span className="movie-card__star--empty"></span>*/}
                        {/*    <span className="movie-card__star--empty"></span>*/}
                        {/*</div>*/}
                        <img src={defImageStars} alt="Movie Stars"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardLoader;