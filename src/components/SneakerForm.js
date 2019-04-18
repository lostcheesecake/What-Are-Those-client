import React from 'react'
import { Link } from 'react-router-dom'

const SneakerForm = ({ sneaker, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Brand</label>
    <input
      placeholder="Brand"
      value={sneaker.brand}
      name="brand"
      onChange={handleChange}
    />

    <label>Style</label>
    <input
      placeholder="Style"
      value={sneaker.style}
      name="style"
      onChange={handleChange}
    />

    <label>Color</label>
    <input
      placeholder="Color"
      value={sneaker.color}
      name="color"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to='/'>
      <button>Cancel</button>
    </Link>
  </form>
)

export default SneakerForm
