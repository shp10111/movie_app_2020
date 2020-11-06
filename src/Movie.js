import React from 'react';
import PropTypes from 'prop-types'

function Movie(id,year,title,summary,poster){
    return <h1>{title}</h1>;
}


Movie.propTypes = {
    id : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;