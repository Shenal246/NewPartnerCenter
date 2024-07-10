import React from 'react';
import './Progress.css';
import PropTypes from 'prop-types';

function Progress({ width, height, topic, value }) {
    return (
        <div className="reusableprcard" style={{ width, height }}>
            <h3 className="reusableprcard-topic">{topic}</h3>
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${value}%` }}
                >
                    {value}%
                </div>
            </div>


        </div>
    );
}

Progress.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Progress;
