import React from 'react';
import Header2 from '../Typography/Header2/Header2';

const NoDataAvailable = () => {
  return (
    <div>
      <Header2>Looks like your data isn't ready yet</Header2>
      <p>
        We can only show you performance information when you've been investing for at least one year, 
        so please check back then.
      </p>
    </div>
  );
};

export default NoDataAvailable;
