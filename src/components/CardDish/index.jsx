import React, { useState, useEffect } from 'react';
import { FiStar, FiEdit3 } from 'react-icons/fi'

import formatMoney from '../../utils/formatMoney'

import { Container, ImageDish, Description, EvaluationAndValue } from './styles'

const Dish = (props) => {


  return (
    <Container>

      {props.products[0] ? props.products[0].map(product => (

        <>
          <ImageDish>
            <img key={product.uuid} src={product.image} alt={product.name}/>
          </ImageDish>
          <Description>
            <p>{product.name}</p>
            <span>{product.restaurant}</span>
          </Description>

          <EvaluationAndValue>
          <div>
            <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
          </div>
          { props.company
            ? <span className='editDish'><FiEdit3 size={18} /></span>
            : <span className='value'>{formatMoney(product.actual_price)}</span>
          }
          </EvaluationAndValue>
        </>
      )) : 'Carregando pratos...'}

    </Container>
  )
}

export default Dish;
