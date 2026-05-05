import React from 'react';
import FestivalList from './FestivalList';

function Festivals({ submittedSearch }) {
  return (
    <>
      <FestivalList submittedSearch={submittedSearch} />
    </>
  );
}

export default Festivals;