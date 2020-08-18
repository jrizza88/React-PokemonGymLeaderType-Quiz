import React from 'react';
import PropTypes from 'prop-types';

const Result = ({result}) => {
    return (
        <div>
            You are best to be a <bold>{result}</bold> type of Gym Leader!
        </div>
    )
}

Result.propTypes = {
    result: PropTypes.string.isRequired
}

export default Result;