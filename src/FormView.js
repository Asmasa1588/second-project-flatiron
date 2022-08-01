import React, { useState } from "react";

function FormView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    price: 0,
    brand: "",
    year: undefined,
    model: "",
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    fetch("http://localhost:3004/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Owner's full name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div>
        <label>Car Price</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />
      </div>
      <div>
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          onChange={handleChange}
          value={formData.brand}
        />
      </div>
      <div>
        <label>Year</label>
        <input
          type="number"
          name="year"
          onChange={handleChange}
          value={formData.year}
        />
      </div>
      <div>
        <label>Model</label>
        <input
          type="text"
          name="model"
          onChange={handleChange}
          value={formData.model}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormView;
