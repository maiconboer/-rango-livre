import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {FiCreditCard, FiDollarSign, FiChevronsRight, FiShoppingCart } from 'react-icons/fi'

import api from '../../services/api'

import formatMoney from '../../utils/formatMoney'

import { Container, Content, UserData, Cash, ContainerDish, ShoppingCartIcon } from './styles';

import Dish from '../../components/CardDish'

const HomeClient = () => {

  const [products, setProducts] = useState([])

  const user = JSON.parse(localStorage.getItem('@RangoLivre:user'));

  let meal = user.meal_allowance_balance;
  let regular = user.regular_balance;
  let total = regular + meal;
  let city = user.addresses[0].city;


  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`products?city=${city}&offset=0&limit=10`)

      setProducts([...products, response.data.products ])
    }
    getProducts();
  }, [])

  function handleDeleteCredentials() {
    localStorage.removeItem('@RangoLivre:user')
    localStorage.removeItem('@RangoLivre:token')
    localStorage.removeItem('@RangoLivre:purchase')

    document.location.reload(true);
  }

  return (
    <>
      <Container>
        <Content>
          <UserData>
            <h2>Bem vindo(a), {user.name}</h2>
              <Cash>
                <div>
                  <FiCreditCard size={20}/>
                  <span>Mercado Vale</span>
                </div>
                <span>{formatMoney(meal)}</span>
              </Cash>

              <Cash>
                <div>
                  <FiDollarSign size={20} />
                  <span>Mercado Pago</span>
                </div>
                <span>{formatMoney(regular)}</span>

              </Cash>

              <div className='total'>
                <p>Saldo total {formatMoney(total)}</p>
              </div>

              <div className='historic-transfer'>
                <Link to='/deposits'>
                  Realizar depósito <FiChevronsRight size={20} />
                </Link>

                <div className='transfer-or-exit'>
                  <Link to='/transfer-money'>
                    Realizar transferencia<FiChevronsRight size={20} />
                  </Link>

                  <Link to={'#'} onClick={handleDeleteCredentials}>
                    Sair<FiChevronsRight size={20} />
                  </Link>
                </div>

              </div>

          </UserData>

          <h3 className='suggestions'>Sugestões da semana <span>Cardápio <FiChevronsRight /></span></h3>

          <ContainerDish>
            {products[0] ? products[0].map(product => (
              <Link key={product.uuid} to={`products/${product.uuid}`}>
                <Dish products={product} />


              </Link>
            ))
            : ''}

          </ContainerDish>

          <Link to='/shopping-cart'>
          <ShoppingCartIcon>
            <FiShoppingCart size={24}/>
          </ShoppingCartIcon>
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default HomeClient;
