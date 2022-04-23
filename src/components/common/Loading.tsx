import React, { ReactElement } from 'react';

import '../../styles/loading.css';

const Loading = (): ReactElement => {
  return (
    <div className="loader">
      <div className="loader__icon" />
    </div>
  );
};

export default Loading;
