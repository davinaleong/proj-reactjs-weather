import PropTypes from 'prop-types';

const Alert = (props) => {
  return (
    <div className="alert">
      <i className="far fa-times-circle"></i> {props.text}
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string
};

export default Alert;