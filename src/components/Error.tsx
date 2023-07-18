import React from 'react';

interface ErrorMessageProps {
    error: string
}

const Error = ({error}: ErrorMessageProps) => {
    return (
        <p className='text-center text-red-600'>{error}</p>
    );
};

export default Error;