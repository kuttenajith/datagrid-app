import React from 'react';
import './Checkbox.css';

const Checkbox = ({ isChecked, isIndeterminate, onChange, label }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = isIndeterminate; // Set the intermediate state
        }
    }, [isIndeterminate]);

    return (
        <label className="checkbox-container">
            <input
                type="checkbox"
                checked={isChecked}
                ref={ref}
                onChange={onChange}
            />
            {label}
        </label>
    );
};

export default Checkbox;