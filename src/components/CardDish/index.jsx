import React, { useState, useEffect } from 'react';
import { FiStar, FiEdit3 } from 'react-icons/fi'

import formatMoney from '../../utils/formatMoney'

import { Container, ImageDish, Description, EvaluationAndValue } from './styles'


const Dish = (props) => {

  return (
      <Container>
          <ImageDish>
            <img src='.' alt='.'/>
          </ImageDish>
          <Description>
            <p>aa</p>
            <span>aa</span>
          </Description>

          <EvaluationAndValue>
          <div>
            <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
          </div>
          { props.company
            ? <span className='editDish'><FiEdit3 size={18} /></span>
            : <span className='value'>a</span>
          }
          </EvaluationAndValue>
      </Container>
  )
}

export default Dish;
