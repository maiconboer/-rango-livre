import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {FiCreditCard, FiDollarSign, FiChevronsLeft, FiTruck, FiClock, FiCheck, FiCheckCircle } from 'react-icons/fi'

import formatMoney from '../../utils/formatMoney'

import api from '../../services/api'

import { Container, Content, UserData, Cash, ContainerDish, PurchaseDetails, CheckOut, SelectPaymentMethod, PaymentSuccess } from './styles';

import SelectDish from '../../components/SelectDish'

const ShoppingCart = (props) => {

  const [products, setProducts] = useState([])
  const [dataAboutProducts, setDataAboutProducts] = useState([])
  const [valueDish, setValueDish] = useState([])
  const [qtdProducts, setQtdProducts] = useState([])
  const [checkOutTotal, setCheckOutTotal] = useState([])
  const [payment_method, setPayment_method] = useState()

  // const [min_estimative, setMin_estimative] = useState(0)
  // const [max_estimative, setMax_estimative] = useState(0)

  const user = JSON.parse(localStorage.getItem('@RangoLivre:user'));

  let meal = user.meal_allowance_balance;
  let regular = user.regular_balance;
  let total = regular + meal;

  useEffect(() => {
    async function getProducts() {

      let allProductsLocalStorage = []
      let arrayPurchase = [];
      let id = []
      let valuesDishes = []

      let purchaseLocalStorage = localStorage.getItem('@RangoLivre:purchase');

      let purchase = JSON.parse(purchaseLocalStorage)
      arrayPurchase.push(purchase)

      let allProducts = []

      if(purchase && purchase !== null ) {
        for (let i = 0; i < purchase.length; i++) {

          valuesDishes.push(purchase[i].valueDish)
          setValueDish(valuesDishes.reduce((acc, valuesDishes) => {
            return acc + valuesDishes
          }, 5))


          Promise.all([
            api.get(`products/${purchase[i].id}`),

          ]).then(data => {
            let qtd = arrayPurchase[0][i].qtdProducts

            allProductsLocalStorage.push(data[0].data)

            setDataAboutProducts([...dataAboutProducts, allProductsLocalStorage])

            data[0].data.product = {
              ...data[0].data.product,
              qtd
            }

            allProducts.push(data[0].data.product)
            setProducts([...products, allProducts])

          });
        }
      }
      setQtdProducts(qtdProducts)
    }

  getProducts();
  }, [])

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

  function handleSelectPayment(event) {
    let modalPayment = document.querySelectorAll('.paymentMethod span')

    modalPayment.forEach(span => {
      span.classList.remove('selected')
    })



    switch (event.target.textContent) {
      case 'Mercado Vale':
        setPayment_method(0)
        break;

      case 'Mercado Pago':
        setPayment_method(1)
        break;

      case 'Dinheiro':
        setPayment_method(2)
        break;

      default:
        break;
    }
    event.target.classList.add('selected')
  }

  async function handleSubmitOrder(event) {

    console.log(products[0]);

    let data = {
      products
    }

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
          </UserData>

          <Link to='/home-client'>
            <span className='backToDetail'>
              <FiChevronsLeft />
              Voltar
            </span>
          </Link>

          {/* {regular < valueDish ? console.log('sem saldo')
            : console.log('pedido finalizado')} */}

            {/* {console.log(payment_method)}
            {console.log(payment_method)}
            {console.log(payment_method)}
            {console.log(payment_method)} */}
            {/* {console.log(products)} */}

          <ContainerDish>

            { products[0] && products[0] !== undefined
            ? products[0].map((product, index) => (
              <SelectDish
                key={product.uuid}
                product={product}
                shoppingCart={true}/>
              ))
            : ''
            }

          </ContainerDish>
          <PurchaseDetails>
            <span><FiTruck size={40} />Taxa de entrega: R$ 5,00</span>
            <span><FiDollarSign size={40} />Total: {formatMoney(valueDish)}</span>
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

                  <span onClick={handleSelectPayment}>
                    <FiCreditCard size={20}/>
                    Mercado Vale
                  </span>

                  <span onClick={handleSelectPayment}>
                    <FiCreditCard size={20}/>
                    Mercado Pago
                  </span>

                  <span onClick={handleSelectPayment}>
                    <FiDollarSign size={20}/>
                    Dinheiro
                  </span>

                  {/* <input
                    type='password'
                    name='password'
                    className='password'
                    placeholder='Digite sua senha'
                  /> */}

                  <div className='buttons'>

                    <button
                      className='btn-confirm'
                      onClick={handleSubmitOrder}
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
