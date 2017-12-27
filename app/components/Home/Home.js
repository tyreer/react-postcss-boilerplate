import React from 'react';
import RenderPropModel from '../RenderPropModel/RenderPropModel';
import BasicComponentWithHOC from '../HOCModel/HOCModel';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Render of the component at app/components/Home/Home.js</h2>

      <RenderPropModel render={({ x, y }) => (
        // The render prop gives us the state we need
        // to render whatever we want here.
        <div>
          <h1>Via render prop:</h1>
          <h2>The mouse position is ({x}, {y})</h2>
        </div>
      )}
      />

      <BasicComponentWithHOC />
    </div>
  );
}
