import React, { useState } from 'react';
import { Form } from '@unform/web'

import api from '../../services/api';

import { Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import { Container, Content, UserData, ContainerForm } from './styles';

import Dropzone from '../../components/Dropzone';

const AddProduct = () => {

  const [image, setImage] = useState()
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [description, setDescription] = useState()
  const [actual_price, setActual_price] = useState()
  const [regular_price, setRegular_price] = useState()
  const [discount, setdiscount] = useState()
  const [restaurant, setRestaurant] = useState()
  const [city, setCity] = useState()
  const [min_estimative, setMin_estimative] = useState()
  const [max_estimative, setMax_estimative] = useState()

  function handleSetName(event) {
    const nameDish = event.target.value
    setName(nameDish)
  }

  function handleSetCategory(event) {
    const categoryDish = event.target.value
    setCategory(categoryDish)
  }

  function handleSetDescription(event) {
    const descriptionDish = event.target.value
    setDescription(descriptionDish)
  }

  function handleSetRegularPrice(event) {
    const regularPrice = event.target.value
    setRegular_price(regularPrice)
  }

  function handleSetActualPrice(event) {
    const actualPrice = event.target.value
    setActual_price(actualPrice)
  }

  function handleSetDiscount(event) {
    const discount = event.target.value
    setdiscount(discount)
  }

  function handleSetRestaurant(event) {
    const restName = event.target.value
    setRestaurant(restName)
  }

  function handleSetMinEstimative(event) {
    const minEstimative = event.target.value
    setMin_estimative(minEstimative)
  }

  function handleSetMaxEstimative(event) {
    const maxEstimative = event.target.value
    setMax_estimative(maxEstimative)

  }  function handleSetCity(event) {
    const city = event.target.value
    setCity(city)
  }

  async function handleSubmit() {
    const data = {
      image,
      name,

      actual_price,
      regular_price,
      discount,
      description,
      restaurant,
      min_estimative,
      max_estimative,
      city,
    }

    console.log(data);

    const response = await api.post('products', data)
    console.log(response);
  }

  return (
    <>
      <Container>
        <Content>
          <UserData>
            <h2>Bem vindo(a), Empresa xyz</h2>

              <div className='total'>
                <p>Saldo total R$ 599,01</p>
              </div>
          </UserData>

          <Link to='home-client'>
            <span><FiChevronsLeft size={20}/>Voltar</span>
          </Link>

        <ContainerForm>
          <Form onSubmit={handleSubmit}>

            <Dropzone onFileUploaded={setImage} />

            <input
              type='text'
              name='restaurant'
              placeholder='Nome do Restaurante'
              onChange={handleSetRestaurant}
            />

            <input
              type='text'
              name='name'
              placeholder='Nome do prato'
              onChange={handleSetName}
            />

            <input
              type='text'
              name='name'
              placeholder='Categoria'
              onChange={handleSetCategory}
            />

            <input
              type='text'
              name='description'
              placeholder='Descrição'
              onChange={handleSetDescription}
            />

            <input
              type='number'
              name='regular_price'
              placeholder='Preço sem desconto'
              onChange={handleSetRegularPrice}
            />

            <input
              type='number'
              name='actual_price'
              placeholder='Preço atual'
              onChange={handleSetActualPrice}
            />

            <input
              type='number'
              name='discount'
              placeholder='Desconto em R$'
              onChange={handleSetDiscount}
            />

            <input
              type='number'
              name='min_estimative'
              placeholder='Estimativa mínima'
              onChange={handleSetMinEstimative}
            />
            <input
              type='number'
              name='max_estimative'
              placeholder='Estimativa máxima'
              onChange={handleSetMaxEstimative}
            />

            <input
              type='text'
              name='city'
              placeholder='Cidade'
              onChange={handleSetCity}
            />
            <button type="submit">Salvar prato</button>

            </Form>
          </ContainerForm>
        </Content>
      </Container>
    </>
  );
};

export default AddProduct;
