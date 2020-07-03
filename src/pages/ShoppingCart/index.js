import React from 'react';
import { Link } from 'react-router-dom'
import {FiCreditCard, FiDollarSign, FiChevronsLeft, FiTruck, FiClock } from 'react-icons/fi'

import { Container, Content, UserData, Cash, ContainerDish, PurchaseDetails } from './styles';

import SelectDish from '../../components/SelectDish'

const ShoppingCart = () => {

  return (
    <>
      <Container>
        <Content>
          <UserData>
              <Cash>
                <div>
                  <FiCreditCard size={20}/>
                  <span>Mercado Vale</span>
                </div>
                <span>R$ 150,00</span>
              </Cash>

              <Cash>
                <div>
                  <FiDollarSign size={20} />
                  <span>Mercado Pago</span>
                </div>
                <span>R$ 150,00</span>

              </Cash>

              <div className='total'>
                <p>Saldo total R$ 300,00</p>
              </div>
          </UserData>

          <Link to='details'>
            <span className='backToDetail'>
              <FiChevronsLeft />
              Voltar
            </span>
          </Link>

          <ContainerDish>
            <SelectDish shoppingCart={true}/>
            <SelectDish shoppingCart={true}/>
            <SelectDish shoppingCart={true}/>

          </ContainerDish>

          <PurchaseDetails>
            <span><FiTruck size={40} />Taxa de entrega: R$ 3,00</span>
            <span><FiDollarSign size={40} />Total: R$ 110,00</span>
            <span><FiClock size={40} />Tempo de entrega: 45 min</span>
          </PurchaseDetails>


        </Content>
      </Container>
    </>
  );
};

export default ShoppingCart;
