//import { consoleSeparator } from './helpers/consoleSeparator';

import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './ForwardCounter';

function Counters() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default Counters;
