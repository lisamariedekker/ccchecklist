import React from 'react'
import Requirement from './Requirement'

const Bundle = ({bundles}) => {

  return (
    <div>
      {bundles.map(bundle => {
        return (
          <>
          <h5>{bundle.name}</h5>
          <Requirement req={bundle.requirements} key={bundle.id} />
          </>
        )
      })}
    </div>
  );
};

export default Bundle;
