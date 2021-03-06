import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'
import Radium from 'radium'
import { headerStack } from 'universal/styles/fonts'
import { push } from 'react-router-redux'

const styles = {
  formRow: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  text: {
    border: 0,
    fontFamily: headerStack,
    fontSize: '2em',
    textAlign: 'center',
  },
}

@Radium
export default class SendWorkoutWizardSuccess extends Component {

  static propTypes = {
    lead: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(push('/sale'))
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <ProgressBar bsStyle='success' now={100} label='%(percent)s% Complete' />
            </Col>
          </Row>
          <Row style={styles.formRow}>
            <Col xs={12}>
              <div>
                <h1 style={styles.text}>Success!</h1>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
