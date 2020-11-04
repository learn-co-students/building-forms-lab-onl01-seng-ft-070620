import React from 'react';

const Bands = ({ bands }) => {
  const renderedBands = bands.map((band, index) => {
    return <li key={index}>{band.name}</li>;
  });

  return (
    <div>
      {renderedBands}
    </div>
  );

};

export default Bands;