import React from 'react'
import { Col, Form, Image, ListGroup, Row } from 'react-bootstrap'

class Requirement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {requirements: []}
  }

  componentDidMount() {
    this.setState({
      requirements: this.props.requirements
    })
  }

  render() {
    function RequirementItem (props) {
      const req = props.value
      return <ListGroup.Item>
        <Row>
          <Col sm={1}>
            <Form.Check />
          </Col>
          <Col sm={1}>{req.quantity}</Col>
          <Col sm={1}>
            <Image width={'20'} src={req.item.sprite} />
          </Col>
          <Col sm={3}>{req.item.name}</Col>
          <Col>
            <Image width={'25'} src={req.item.season} />
          </Col>
          <Col>{req.item.source}</Col>
        </Row>
      </ListGroup.Item>
    }

    function RequirementView(props) {
      const requirement = props.requirements.map((r) =>
        <RequirementItem key={r.id} value={r} />
      )
      return (
        <>
          <ListGroup variant='flush'>
            {requirement}
          </ListGroup>
        </>
      )
    }
    return (
      <RequirementView requirements={this.state.requirements} />
    )
  }
}

export default Requirement;