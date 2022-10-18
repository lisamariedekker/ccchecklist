import React from 'react'
import { Accordion, Col, ProgressBar, Row } from 'react-bootstrap';
import Requirement from './Requirement'

const Bundle = ({bundles}) => {

  return (
    <div>
      {bundles.map(bundle => {
        return (
          <>
          <Accordion>
            <Accordion.Item eventKey={bundle.id}>
              <Accordion.Header>
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
              </Accordion.Header>
              <Accordion.Body>
                <Requirement req={bundle.requirements} key={bundle.id} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </>
        )
      })}
    </div>
  );
};

export default Bundle;
