
import PropTypes from 'prop-types';
import './SmCard.css';

const SmCard = ({ width, height, topic, value }) => {
  return (
    <div className="reusablesmcard" style={{ width, height }}>
      <h3 className="reusablesmcard-topic">{topic}</h3>
      <p className="reusablesmcard-value">{value}</p>
    </div>
  );
};

SmCard.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SmCard;
