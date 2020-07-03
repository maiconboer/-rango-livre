import React from 'react';
import { FiStar, FiEdit3 } from 'react-icons/fi'

import { Container, ImageDish, Description, EvaluationAndValue } from './styles'

import dishImg from '../../assets/dish.jpg'

const Dish = (props) => {

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
        { props.company
        ? <span className='editDish'><FiEdit3 size={18} /></span>
        : <span className='value'>R$ 59</span>
        }
      </EvaluationAndValue>
    </Container>
  )
}

export default Dish;
