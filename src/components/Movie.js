import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <Link to={`detail/${id}`}>
                <img src={coverImg} alt={title} />
            </Link>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                { genres.map( genre => 
                    <li key={genre}>{genre}</li>
                )}
            </ul>
        </div>
    )
};

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
};

export default Movie;