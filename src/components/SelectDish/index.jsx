import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'

import { Container, ImageAndDescription, AddQuantity, ShowQuantity } from './styles'

import formatMoney from '../../utils/formatMoney'

const SelectDish = (props) => {

  console.log(props.product);

  const [quantityDish, setQuantityDish] = useState(0)

  function handleAddDish() {
    let dish = quantityDish
    dish++
    setQuantityDish(dish)
  }

  function handleRemoveDish() {
    let dish = quantityDish
    dish--

    dish > -1 ? setQuantityDish(dish) : dish = 0

  }

  return (
    <>
    {Array.isArray(props.product) ?
     ' '
    :
      <Container>
        <ImageAndDescription>
          <img src={props.product.image} alt={props.product.name}/>

          <div>
            <p>{props.product.name}</p>
            <span>{props.product.description}</span>
          </div>

          { !props.shoppingCart
          ?
            <AddQuantity>
              <span className='price'>{formatMoney(props.product.actual_price)}</span>
              <div>
              <FiMinus size={22} onClick={handleRemoveDish} />
              <input
                disabled type="number"
                name="qtdDish"
                value={quantityDish}/>
              <FiPlus size={22} onClick={handleAddDish}/>
              </div>
            </AddQuantity>
          :
          <ShowQuantity>
            <span className='price'>R$ 59</span>
            <div>
              <p>Quant: 1</p>
            </div>
          </ShowQuantity>
          }
        </ImageAndDescription>
      </Container>
    }
    </>
  )
}

export default SelectDish;
