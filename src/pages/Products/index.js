import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import {FiChevronsLeft, FiStar, FiCheck } from 'react-icons/fi'

import api from '../../services/api'

import { Container, Content, ImageDish, ContainerDish, PlaceOrder } from './styles';

import SelectDish from '../../components/SelectDish'

const Products = (props) => {

  const history = useHistory();
  let [product, setProduct] = useState([])
  let [quantity, setQuantity] = useState(0)

  let purchase = []
  let test = localStorage.getItem('@RangoLivre:purchase')
  let location = useLocation()
  let id = location.pathname.slice(10, location.length)

  useEffect(() => {

    async function getDataProduct() {
      const response = await api.get(`products/${id}`)
      setProduct(response.data.product)
    }

    getDataProduct()
  },[])

  function handleGetInformationToOrder(event) {
    let input = document.querySelector('input')
    let qtdProducts = input.value

    setQuantity(qtdProducts)

    if(qtdProducts > 0) {
      input.style.border = '2px solid white'

      if (localStorage.hasOwnProperty('@RangoLivre:purchase')) {
        purchase = JSON.parse(localStorage.getItem('@RangoLivre:purchase'))
      }

      purchase.push({
        id,
        qtdProducts
      })

      localStorage.setItem('@RangoLivre:purchase', JSON.stringify(purchase));

      history.push('/shopping-cart')
    } else {
      input.style.border = '2px solid red'
    }

  }

  return (
    <>
      <Container>
        <Content>
          <ImageDish>
            <Link to='/home-client'>
              <span><FiChevronsLeft size={20} />Voltar</span>
            </Link>

            <img src={product.image} alt="Dish"/>
          </ImageDish>

          <h3
            className='company'>
            <span>
              <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
            </span>
          </h3>
          {/* <p className='price' >A partir de R$ 49,00</p> */}

          <p className='about-place'>Sobre o local: Convide a família e venha conhecer os melhores pratos da cidade! </p>

          {/* map nos pratos, fotos, descriptions e etc */}
          <ContainerDish>

            <SelectDish product={product}/>

          </ContainerDish>

          <PlaceOrder>
            <button onClick={handleGetInformationToOrder}>
              <Link to='#'>
              <FiCheck size={20} />
                Pedir agora
              </Link>
            </button>
          </PlaceOrder>

        </Content>
      </Container>
    </>
  );
};

export default Products;
