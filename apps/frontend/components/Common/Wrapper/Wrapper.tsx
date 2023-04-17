import React from 'react';
import PropTypes from 'prop-types';

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={`w-full max-w-[1800px] px-5 md:px-10 mx-auto ${
        className || ''
      } `}
    >
      {children}
    </div>
  );
}

Wrapper.propTypes = {};

export default Wrapper;
