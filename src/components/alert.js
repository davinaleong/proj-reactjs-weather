const Alert = (props) => {
  return (
    <div className="alert">
      <i className="far fa-times-circle"></i> {props.text}
    </div>
  );
}

export default Alert;