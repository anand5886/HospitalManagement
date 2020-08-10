import React from 'react';
import PropTypes from 'prop-types';

export const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label
}) => {
    return (
        <div>

            {/* <label htmlFor={name}>{label}</label> */}
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={className}
                style={error && { border: 'solid 1px red' }}
            ></input>
            {error && <p>{error}</p>}

        </div>
    )

}

FormInput.defaultProps = {
    type: "text",
    className: ""
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password', 'checkbox']),
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
}



