import React from 'react';
import { FiStar } from 'react-icons/fi'

import { Container, ImageDish, Description, EvaluationAndValue } from './styles'

import dishImg from '../../assets/dish.jpg'

const Dish = () => {

  return (
    <Container>
      <ImageDish>
        <img src={dishImg} alt="dish"/>
      </ImageDish>
      <Description>
        <p>Peixe grelhado.</p>
        <span>Fitness Center</span>
      </Description>

      <EvaluationAndValue>
        <div>
          <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
        </div>
        <span className='value'>R$ 46</span>
      </EvaluationAndValue>
    </Container>
  )
}

export default Dish;
