import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import pxToEm from 'universal/utils/pxToEm'
import { white, black } from 'universal/styles/colors'
import ArrowDown from 'universal/components/ArrowDown/ArrowDown'
import { imgResponsive, centerBlock } from 'universal/styles/helpers'
import shallowCompare from 'react-addons-shallow-compare'
import Radium from 'radium'
import { headerStack, accuMed } from 'universal/styles/fonts'

import productImage from '../../images/packshot.png'
import shadow from './images/bg-shadow.png'

const styles = {
  mainProduct: {
    position: 'relative',
    backgroundColor: white,
    backgroundImage: `url(${shadow})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'top',
    backgroundSize: '100% 60%',
  },
  productImage: Object.assign({}, imgResponsive, centerBlock, {
    marginTop: 30,
    paddingBottom: 40,
    maxWidth: 900,
    width: '100%',
    zIndex: 1,
    position: 'relative',
    '@media (max-width: 414px)': {
      marginTop: 20,
    },
  }),
  jetsLogo: Object.assign({}, imgResponsive, centerBlock),
  normally: {
    fontSize: `${pxToEm(60)}em`,
    fontFamily: headerStack,
    fontWeight: accuMed,
    textAlign: 'center',
    color: black,
    lineHeight: '50px',
    margin: '0 0 40px 0',
  },
  greyShelf: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100vw',
    zIndex: 0,
    height: 200,
    background: 'linear-gradient(to bottom, #d4d2cc 0%,#f9f9f8 100%)',
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
}

@Radium
export default class MainProduct extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const {
      arrowDown,
      bgColor,
    } = this.props

    let mainProductStyle = styles.mainProduct
    if (bgColor) {
      mainProductStyle.backgroundColor = bgColor
    }

    return (
      <span>
        <section style={mainProductStyle}>
          {arrowDown && <ArrowDown color={arrowDown} />}
          <Grid>
            <Row>
              <Col xs={12}>
                <img src={productImage} style={styles.productImage} alt='Main product' />
              </Col>
            </Row>
            <div style={styles.greyShelf} />
          </Grid>
        </section>
      </span>
    )
  }
}
