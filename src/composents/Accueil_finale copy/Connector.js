import React from 'react';
import './Connector.css';

function Connector({ completed, inProgress }) {
  return (
    <div className={`connector ${completed ? 'completed' : inProgress ? 'in-progress' : 'locked'}`} />
  );
}

export default Connector;
