import React from 'react';
import Loader from 'react-loader-spinner';

interface LoaderProps {
  type ?: 'Puff';
  color ?: string;
  width ?: string | number;
  height ?: string | number;
}

export const CustomLoader = ({ type, color, width, height }: LoaderProps) => {
  return (
    <Loader
      type={type || 'Puff'}
      color={color || '#00BFFF'}
      height={height || 100}
      width={width || 100}
    />
  );
};

export default CustomLoader;
