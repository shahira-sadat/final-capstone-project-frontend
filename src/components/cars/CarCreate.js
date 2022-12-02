import React, { useState } from 'react';

function CarCreate() {
  const [carName, setCarName] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carPrice, setCarPrice] = useState('');

  return (
    <div>
      <form className="form-container">
        <input
          type="text"
          placeholder="Brand"
          name="carBrand"
          className="form-input"
          value={carBrand}
          onChange={(e) => setCarBrand(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Model"
          name="carName"
          className="form-input"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image link"
          name="carImage"
          className="form-input"
          value={carImage}
          onChange={(e) => setCarImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Color"
          name="carColor"
          className="form-input"
          value={carColor}
          onChange={(e) => setCarColor(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Year"
          name="carYear"
          className="form-input"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Year"
          name="carPrice"
          className="form-input"
          value={carPrice}
          onChange={(e) => setCarPrice(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

export default CarCreate;
