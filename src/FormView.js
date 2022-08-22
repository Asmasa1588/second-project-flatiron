import React, { useState } from "react";

function FormView() {
  const [formData, setFormData] = useState({
    //properties
    name: "",
    email: "",
    price: "",
    brand: "",
    year: "",
    model: "",
  });
  function handleChange(event) {
    //function invoked ,every time when a user type a letter in one of the  inputs,it will update the local state
    //
    console.log(event.target.name);
    setFormData({
      // updating the local state(react state of the component)
      ...formData, //spread operator : is needed in order to Not delete the rest of the state. ex we update the
      // year , we would like to still have name email price etc saved.
      [event.target.name]: event.target.value, // left side is the key. right side is the value
    });
    console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    fetch("http://localhost:3004/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      setFormData({
        name: "",
        email: "",
        price: "",
        brand: "",
        year: "",
        model: "",
      });
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
