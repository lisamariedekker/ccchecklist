import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'

class Bundle extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.bundles
  }

  render() {
    function BundleCard(props) {
      return <Card>
        <Row>
          <Col sm={1}>
            <Image rounded={true} src={props.value.img} width={'50'} height={'50'} />
          </Col>
          <Col>
            <Card.Title>{props.value.name}</Card.Title>
            <Card.Subtitle>{props.value.reward}</Card.Subtitle>        
          </Col>
        </Row>
      </Card>
    }
  
    function BundleView(props) {
      const bundle = props.bundles.map((b) =>
        <BundleCard key={b.id} value={b} />
      )
      return (
        <>
          {bundle}
        </>
      )
    }
  
    return (
      <BundleView bundles={this.state} />
    )
  }
}

export default Bundle;