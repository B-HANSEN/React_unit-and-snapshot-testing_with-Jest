import React from 'react';
import './button.css';

function Button ({ label} ) {
    // differentiate between regular and test-related IDs: 'data-testid'
    return (
        <div
            data-testid="button"
            className="button-style"
            >hi { label } 
        </div>
    )
}

export default Button