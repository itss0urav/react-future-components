import "./Button.css";
import React from 'react';

interface ButtonProps {
  variant?: 'darkspace' | 'whitespace' | 'success' | 'danger' | 'bluemoon' | 'neon-darkspace' | 'neon-whitespace' | 'neon-success' | 'neon-danger' | 'neon-night';
  value?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'darkspace', value = 'Hi' }) => {
  let buttonStyle;

  switch (variant) {
    case 'darkspace':
      buttonStyle = `darkspace`;
      break;
    case 'whitespace':
      buttonStyle = `whitespace`;
      break;
    case 'success':
      buttonStyle = `success`;
      break;
    case 'danger':
      buttonStyle = `danger`;
      break;
    case 'bluemoon':
      buttonStyle = `bluemoon`;
      break;
    case 'neon-darkspace':
      buttonStyle = `neon-darkspace`;
      break;
    case 'neon-whitespace':
      buttonStyle = `neon-whitespace`;
      break;
    case 'neon-success':
      buttonStyle = `neon-success`;
      break;
    case 'neon-danger':
      buttonStyle = `neon-danger`;
      break;
    case 'neon-night':
      buttonStyle = `neon-night`;
      break;
    default:
      buttonStyle = `default`;
  }

  return (
    <button className={buttonStyle}>
      {value}
    </button>
  );
};
