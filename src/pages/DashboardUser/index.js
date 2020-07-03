import React from 'react';
import { Link } from 'react-router-dom'
import {FiCreditCard, FiDollarSign, FiChevronsRight, FiShoppingCart } from 'react-icons/fi'

import { Container, Content, UserData, Cash, ContainerDish, ShoppingCart } from './styles';

import Dish from '../../components/CardDish'

const DashboardUser = () => {

  return (
    <>
      <Container>
        <Content>
          <UserData>
            <h2>Bem vindo(a), Usuário</h2>
              <Cash>
                <div>
                  <FiCreditCard size={20}/>
                  <span>Mercado vale</span>
                </div>
                <span>R$ 150,00</span>
              </Cash>

              <Cash>
                <div>
                  <FiDollarSign size={20} />
                  <span>Mercado vale</span>
                </div>
                <span>R$ 150,00</span>

              </Cash>

              <div className='total'>
                <p>Saldo total R$ 300,00</p>
              </div>

              <div className='historic-transfer'>
                <Link to='/historico'>
                  Visualizar histórico de compras <FiChevronsRight size={20} />
                </Link>

                <Link to='/transferencia'>
                  Realizar transferencia<FiChevronsRight size={20} />
                </Link>
              </div>

          </UserData>

          <h3 className='suggestions'>Sugestões da semana <span>Cardápio <FiChevronsRight /></span></h3>

          {/* map nos pratos, fotos, descriptions e etc */}
          <ContainerDish>
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
          </ContainerDish>

          <ShoppingCart>
            <FiShoppingCart size={24}/>
          </ShoppingCart>
        </Content>
      </Container>
    </>
  );
};

export default DashboardUser;
