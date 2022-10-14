import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import Requirement from './Requirement'

class Bundle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bundles: []}
  }

  componentDidMount() {
    this.setState({
      bundles: this.props.bundles
    })
  }

  render() {
    function BundleCard(props) {
      return <Container className='p-3'>
        <Card className='p-3'>
          <Row className='p-3'>
            <Col sm={1}>
              <Image rounded={true} src={props.value.img} width={'50'} height={'50'} />
            </Col>
            <Col>
              <Card.Title>{props.value.name}</Card.Title>
              <Card.Subtitle>{props.value.reward}</Card.Subtitle>        
            </Col>
          </Row>
          <Requirement requirements={props.value.requirements} />
        </Card>
      </Container>
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
      <BundleView bundles={this.state.bundles} className='p-3' />
    )
  }
}

export default Bundle;