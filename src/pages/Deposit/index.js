import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import {FiCreditCard, FiDollarSign, FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'

import api from '../../services/api'

import formatMoney from '../../utils/formatMoney'
import Button from '../../components/Button';

import { Container, Content, UserData, Cash, ContainerForm } from './styles';



const Deposit = () => {

  let [valueDeposit, setValueDeposit] = useState()

  const user = JSON.parse(localStorage.getItem('@RangoLivre:user'));

  const token = localStorage.getItem('@RangoLivre:token');

  let meal = user.meal_allowance_balance;
  let regular = user.regular_balance;
  let total = regular + meal;
  let city = user.addresses[0].city;


  function handleChangeInput(event) {
    const { value, maxLength } = event.target;
    const size = value.slice(0, maxLength);

    setValueDeposit(size)
  }

  async function handleSubmitDeposit(event) {
    event.preventDefault()

    const input = document.querySelector('input')
    let value = Number(input.value)

    console.log(token);

    let response = await api.post('deposits', value, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
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
              maxLength='3'
              value={valueDeposit}
              onChange={handleChangeInput}
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
