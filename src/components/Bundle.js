import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap';
import Requirement from './Requirement'

const Bundle = ({bundles}) => {

  return (
    <div>
      {bundles.map(bundle => {
        return (
          <>
          <Row>
            <Col>
              <h5>{bundle.name}</h5>
            </Col>
            <Col>
              <ProgressBar 
                now={bundle.requirements.filter(r => r.completed).length}
                min={0}
                max={bundle.requirements.length}
              />
            </Col>
          </Row>
          <Requirement req={bundle.requirements} key={bundle.id} />
          </>
        )
      })}
    </div>
  );
};

export default Bundle;
