import React from 'react';
import Loader from 'react-loader-spinner';

import { StyleConstants } from '../styleConstants';

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
      color={color || StyleConstants.colors.loaderColor}
      height={height || 100}
      width={width || 100}
    />
  );
};

export default CustomLoader;
