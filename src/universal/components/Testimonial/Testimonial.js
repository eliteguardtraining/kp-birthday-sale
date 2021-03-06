import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import { headerStack, bodyStack, accuBold } from 'universal/styles/fonts'
import { centerBlock, imgResponsive } from 'universal/styles/helpers'
import pxToEm from 'universal/utils/pxToEm'
import shallowCompare from 'react-addons-shallow-compare'

import testimonialImg from './images/opt_test.png'

const baseFontSize = 20

const styles = {
  header: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(36, baseFontSize)}em`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1em',
    lineHeight: '1em',
  },
  testimonialHeader: {
    fontFamily: headerStack,
    fontWeight: accuBold,
    fontSize: `${pxToEm(36, baseFontSize)}em`,
    textAlign: 'center',
    marginBottom: '1em',
    lineHeight: '1em',
  },
  img: Object.assign({}, centerBlock, imgResponsive, {
    '@media (max-width: 768px)': {
      maxWidth: 180,
    },
  }),
  p: {
    fontFamily: bodyStack,
    textAlign: 'center',
    fontSize: `${pxToEm(baseFontSize - 4)}rem`,
    '@media (min-width: 768px)': {
      textAlign: 'left',
      fontSize: `${pxToEm(baseFontSize)}rem`,
    },
  },
  pTestimonial: {
    fontFamily: bodyStack,
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: `${pxToEm(baseFontSize - 4)}rem`,
    '@media (min-width: 768px)': {
      textAlign: 'left',
      fontSize: `${pxToEm(baseFontSize)}rem`,
    },
  },
}

@Radium
export default class Testimonial extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={10}>
            <h2 style={styles.testimonialHeader}>
              "My skills have gone to levels I could <br />
              not have imagined 3 years ago!"
            </h2>
            <p style={styles.pTestimonial}>"Wow man you really killed it with this VIP program. I have never seen anyone go into so much depth on what it takes to not just be a really good player, but a GREAT player, the player everyone looks up too, and gets respect when they are on the court from anyone.</p>
            <p style={styles.pTestimonial}>I also thought it was sick how you made the day in the life series. You show everything that goes into a real player's life when you did that. Not only the workouts but the nutrition, mental preparation, even reading and productivity stuff. I get SO much from the stuff you do off the court as well.</p>
            <p style={styles.pTestimonial}>My skills have gone to levels I could not have imagined 3 years ago, and your programs have been the best for me."</p>
          </Col>
          <Col xs={12} sm={2}>
            <img style={styles.img} src={testimonialImg} alt='VIP' />
          </Col>

        </Row>
      </Grid>
    )
  }
}
