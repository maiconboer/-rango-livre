import React from 'react';
import { Link } from 'react-router-dom'

import {FiCreditCard, FiDollarSign, FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'

import api from '../../services/api'

import formatMoney from '../../utils/formatMoney'
import Button from '../../components/Button';

import { Container, Content, UserData, Cash, ContainerForm } from './styles';



const Deposit = () => {

  const user = JSON.parse(localStorage.getItem('@RangoLivre:user'));

  let meal = user.meal_allowance_balance;
  let regular = user.regular_balance;
  let total = regular + meal;
  let city = user.addresses[0].city;


  async function handleSubmitDeposit(event) {
    event.preventDefault()

    let response = await api.post('deposit')

    console.log(response);

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
                <Link to='/historic'>
                  Visualizar histórico de compras <FiChevronsRight size={20} />
                </Link>

                <Link to='/transfer-money'>
                  Realizar transferencia<FiChevronsRight size={20} />
                </Link>
              </div>

          </UserData>

          <Link to='/home-client'>
            <span className='backToDetail'>
              <FiChevronsLeft />
              Voltar
            </span>
          </Link>

          <ContainerForm>

          <form onSubmit={handleSubmitDeposit}>

            <input
              type='number'
              name='amount'
              placeholder='Valor ex: 300'
            />

            <Button type="submit">Depositar</Button>
          </form>

            </ContainerForm>
        </Content>
      </Container>
    </>
  );
};

export default Deposit;
