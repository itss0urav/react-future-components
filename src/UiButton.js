import React from 'react';
import PropTypes from 'prop-types';
import './UiButton.css';

const UiButton = ({ label, onClick, variant }) => {
  let buttonStyle = 'button';

  switch (variant) {
    case 'primary':
      buttonStyle += ' button-primary';
      break;
    case 'secondary':
      buttonStyle += ' button-secondary';
      break;
    case 'danger':
      buttonStyle += ' button-danger';
      break;
    default:
      buttonStyle += ' button-primary';
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      {label}
    </button>
  );
};

UiButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

UiButton.defaultProps = {
  onClick: () => {},
  variant: 'primary',
};

export default UiButton;
