import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'

import { Container, ImageAndDescription, AddQuantity, ShowQuantity } from './styles'

import dishImg from '../../assets/dish.jpg'

const SelectDish = (props) => {



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
    <Container>
      <ImageAndDescription>
        <img src={dishImg} alt="dish"/>

        <div>
          <p>Peixe grelhado.</p>
          <span>Peixe grelhado servido com salada.</span>
        </div>

      { !props.shoppingCart
      ?
        <AddQuantity>
          <span className='price'>R$ 59</span>
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
    </>
  )
}

export default SelectDish;
