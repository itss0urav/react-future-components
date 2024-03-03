import "../index.css";
import React from 'react';

interface ButtonProps {
  variant?: 'darkspace' | 'whitespace' | 'success' | 'danger' | 'bluemoon' | 'neon-darkspace' | 'neon-whitespace' | 'neon-success' | 'neon-danger' | 'neon-night';
  value?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'darkspace', value = 'Hi' }) => {
  let buttonStyle;

  switch (variant) {
    case 'darkspace':
      buttonStyle = ` bg-black text-white hover:bg-white hover:text-black `;
      break;
    case 'whitespace':
      buttonStyle = `bg-white text-black hover:bg-black hover:text-white `;
      break;
    case 'success':
      buttonStyle = `bg-green-500 text-white hover:bg-green-700 `;
      break;
    case 'danger':
      buttonStyle = `bg-red-600 text-white hover:bg-red-700 `;
      break;
    case 'bluemoon':
      buttonStyle = `bg-blue-600 text-white hover:bg-blue-700 `;
      break;
    case 'neon-darkspace':
      buttonStyle = ` bg-black neon-gray text-white hover:bg-white hover:text-black `;
      break;
    case 'neon-whitespace':
      buttonStyle = `bg-white neon-gray text-black hover:bg-black hover:text-white `;
      break;
    case 'neon-success':
      buttonStyle = `bg-green-500 neon-green text-white hover:bg-green-400 `;
      break;
    case 'neon-danger':
      buttonStyle = `bg-red-600 neon-red text-white hover:bg-red-500 `;
      break;
    case 'neon-night':
      buttonStyle = `bg-cyan-500 neon-cyan text-white hover:bg-cyan-400 `;
      break;
    default:
      buttonStyle = `bg-blue-500 hover:bg-blue-400 `;
  }

  return (
    <button className={`${buttonStyle} font-medium py-1 px-3 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl flex items-center justify-center`}>
      {value}
    </button>
  );
};
