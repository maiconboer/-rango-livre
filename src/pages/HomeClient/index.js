import React from 'react';
import { Link } from 'react-router-dom'
import {FiCreditCard, FiDollarSign, FiChevronsRight, FiShoppingCart } from 'react-icons/fi'

import { Container, Content, UserData, Cash, ContainerDish, ShoppingCartIcon } from './styles';

import Dish from '../../components/CardDish'

const HomeClient = () => {

  return (
    <>
      <Container>
        <Content>
          <UserData>
            <h2>Bem vindo(a), Usuário</h2>
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

              <div className='historic-transfer'>
                <Link to='/historic'>
                  Visualizar histórico de compras <FiChevronsRight size={20} />
                </Link>

                <Link to='/transfer-money'>
                  Realizar transferencia<FiChevronsRight size={20} />
                </Link>
              </div>

          </UserData>

          <h3 className='suggestions'>Sugestões da semana <span>Cardápio <FiChevronsRight /></span></h3>

          {/* map nos pratos, fotos, descriptions, link para demais pratos da empresa e etc */}
          <ContainerDish>

            <Link to='products'>
              <Dish />
            </Link>

            <Link to='products'>
              <Dish />
            </Link>

            <Link to='products'>
              <Dish />
            </Link>

            <Link to='products'>
              <Dish />
            </Link>

            <Link to='products'>
              <Dish />
            </Link>

            <Link to='products'>
              <Dish />
            </Link>

            <Link to='products'>
              <Dish />
            </Link>

            <Link to='products'>
              <Dish />
            </Link>


          </ContainerDish>

          <ShoppingCartIcon>
            <FiShoppingCart size={24}/>
          </ShoppingCartIcon>
        </Content>
      </Container>
    </>
  );
};

export default HomeClient;
