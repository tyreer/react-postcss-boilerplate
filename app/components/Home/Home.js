import React from 'react';
import RenderPropModel from '../RenderPropModel/RenderPropModel';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Render of the component at app/components/Home/Home.js</h2>

      <RenderPropModel render={({ x, y }) => (
        // The render prop gives us the state we need
        // to render whatever we want here.
        <h1>The mouse position is ({x}, {y})</h1>
      )}
      />
    </div>
  );
}
