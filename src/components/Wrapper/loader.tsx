import React from 'react';
import Loader from 'react-loader-spinner';

import { StyleConstants } from '../styleConstants';

interface LoaderProps {
  type ?: 'Puff';
  color ?: string;
  width ?: string | number;
  height ?: string | number;
  className ?: any;
}

export const CustomLoader = ({ type, color, width, height, className }: LoaderProps) => {
  return (
    <div className={className || ''}>
      <Loader
        type={type || 'Puff'}
        color={color || StyleConstants.colors.loaderColor}
        height={height || 100}
        width={width || 100}
      />
    </div>
  );
};

export default CustomLoader;

// justify-content: center;
//         margin-top: 15px;}}
