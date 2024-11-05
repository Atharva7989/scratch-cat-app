import React, { useState } from 'react';
import catImage from './cat.png';

function Cat() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [rotation, setRotation] = useState(0);

  const handleMove = (e) => {
    e.preventDefault();
    const x = parseInt(e.target.elements.x.value, 10);
    const y = parseInt(e.target.elements.y.value, 10);
    if (!isNaN(x) && !isNaN(y)) {
      setPosition({ x, y });
    }
  };

  const handleRotate = (e) => {
    e.preventDefault();
    const degrees = parseInt(e.target.elements.degrees.value, 10);
    if (!isNaN(degrees)) {
      setRotation(degrees);
    }
  };

  return (
    <div className="container">
      {/* Cat Area */}
      <div className="cat-area">
        <img
          src={catImage}
          alt="Scratch Cat"
          style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            transform: `rotate(${rotation}deg)`,
            transition: 'top 0.3s, left 0.3s, transform 0.3s',
          }}
        />
      </div>

      {/* Control Area */}
      <div className="control-area">
        <form onSubmit={handleMove}>
          <label>
            X:
            <input type="number" name="x" placeholder="Enter X coordinate" />
          </label>
          <label>
            Y:
            <input type="number" name="y" placeholder="Enter Y coordinate" />
          </label>
          <button type="submit">Move</button>
        </form>

        <form onSubmit={handleRotate}>
          <label>
            Degrees:
            <input type="number" name="degrees" placeholder="Enter rotation angle" />
          </label>
          <button type="submit">Rotate</button>
        </form>
      </div>
    </div>
  );
}

export default Cat;
