import React from 'react';
import PropTypes from 'prop-types';

interface WrapperProps {
    children?: React.ReactNode;
    className?: string;
}

function Wrapper({ children, className }: WrapperProps) {
    return (
        <div className={`w-full max-w-[1800px] px-6 md:px-[30px] mx-auto ${className || ''} `}>
            {children}
        </div>
    );
}

Wrapper.propTypes = {};

export default Wrapper;
