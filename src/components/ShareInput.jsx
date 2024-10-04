import React from 'react';
import './ShareInput.css'; // Import the CSS file for this component

const SharedInput = ({ type, label, value, onChange, options, name }) => {
  const renderInputField = () => {
    switch (type) {
      case 'text':
        return <input type="text" value={value} onChange={onChange} name={name} className="shared-input" />;
      case 'textarea':
        return <textarea value={value} onChange={onChange} name={name} className="shared-textarea" />;
      case 'checkbox':
        return (
          <label className="shared-checkbox-container">
            <input type="checkbox" checked={value} onChange={onChange} name={name} className="shared-checkbox" />
            {label}
          </label>
        );
      case 'radio':
        return options.map((option, idx) => (
          <label key={idx} className="shared-radio-label">
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              name={name}
              className="shared-radio"
            />
            {option.label}
          </label>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="shared-input-group">
      {type !== 'checkbox' && <label className="shared-label">{label}</label>}
      {renderInputField()}
    </div>
  );
};

export default SharedInput;
