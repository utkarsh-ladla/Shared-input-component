// FormComponent.js
import React, { useState } from 'react';
import SharedInput from './ShareInput';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isAvailable: false,
    category: '',
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SharedInput
        type="text"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        name="name"
      />
      <SharedInput
        type="textarea"
        label="Description"
        value={formData.description}
        onChange={handleChange}
        name="description"
      />
      <SharedInput
        type="checkbox"
        label="Available"
        value={formData.isAvailable}
        onChange={handleChange}
        name="isAvailable"
      />
      <SharedInput
        type="radio"
        label="Category"
        value={formData.category}
        onChange={handleChange}
        name="category"
        options={[
          { label: 'Category 1', value: 'category1' },
          { label: 'Category 2', value: 'category2' },
        ]}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
