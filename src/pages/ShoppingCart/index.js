import React from 'react';
import { Link } from 'react-router-dom'
import {FiCreditCard, FiDollarSign, FiChevronsLeft, FiTruck, FiClock, FiCheck, FiCheckCircle } from 'react-icons/fi'

import { Container, Content, UserData, Cash, ContainerDish, PurchaseDetails, CheckOut, SelectPaymentMethod, PaymentSuccess } from './styles';

import SelectDish from '../../components/SelectDish'

const ShoppingCart = () => {

  // criar a lógica paa verificar se o cliente possui saldo (mercado pago ou mercado vale) para finalizar o pedido, se a compra for efetuada com sucesso, remover o modal de escolher forma de pagamento e renderizar o modal de finalização do pedido, caso não houver saldo, renderizar modal sobre erro no pedido e etc

  function handleShowModalMethodPayment() {
    const modalMethodPayment = document.querySelector('.paymentMethod')
    modalMethodPayment.classList.add('active')
  }

  function handleRemoveModalMethodPayment() {
    const modalMethodPayment = document.querySelector('.paymentMethod')

    const InputPassword = document.querySelector('.password')
    modalMethodPayment.classList.remove('active')

    InputPassword.value = '';

  }

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

          <CheckOut>


                <button className='btnCheckOut'
                  onClick={handleShowModalMethodPayment}
                >
                  <Link to='shopping-cart'>
                  <FiCheck size={20} />
                  Finalizar pedido
                  </Link>
                </button>

          </CheckOut>

          <SelectPaymentMethod>
            <div className='paymentMethod'>
              <h2>Escolha a forma de pagamento</h2>
                  <span>
                    <FiCreditCard size={20}/>
                    Mercado Vale
                  </span>

                  <span>
                    <FiCreditCard size={20}/>
                    Mercado Pago
                  </span>

                  <span>
                    <FiDollarSign size={20}/>
                    Dinheiro
                  </span>

                  <input
                    type='password'
                    name='password'
                    className='password'
                    placeholder='Digite sua senha'
                  />

                  <div className='buttons'>
                    {/* adicionar um form e submit nos btn */}
                    <button
                      className='btn-confirm'

                    >
                      Confirmar
                    </button>

                    <button
                      className='btn-cancel'
                      onClick={handleRemoveModalMethodPayment}
                    >
                        Cancelar
                    </button>
                  </div>
            </div>
          </SelectPaymentMethod>

          {/* Se o pagamento for bem sucedido, adicionar a classe active neste modal via js */}
          <PaymentSuccess>
            <div className='paymentSuccess'>
              <h2>
                  <FiCheckCircle size={48}/>
                  Pedido finalizado</h2>
                  <Link to='home-client'>Ir para home</Link>
            </div>

          </PaymentSuccess>

        </Content>
      </Container>
    </>
  );
};

export default ShoppingCart;
