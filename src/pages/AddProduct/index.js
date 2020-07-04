import React, { useState } from 'react';
import { Form } from '@unform/web'

import api from '../../services/api';

import { Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import { Container, Content, UserData, ContainerForm } from './styles';

import Dropzone from '../../components/Dropzone';

const AddProduct = () => {

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [actual_price, setActual_price] = useState()
  const [image_url, setImage_url] = useState()
  const [category, setCategory] = useState()
  const [restaurantName, setRestaurantName] = useState()
  const [city, setCity] = useState()

  function handleSetName(event) {
    const nameDish = event.target.value
    setName(nameDish)
  }

  function handleSetDescription(event) {
    const descriptionDish = event.target.value
    setDescription(descriptionDish)
  }

  function handleSetPrice(event) {
    const priceDish = event.target.value
    setActual_price(priceDish)
  }

  function handleSetCategory(event) {
    const priceDish = event.target.value
    setCategory(priceDish)
  }

  function handleSetRestaurant(event) {
    const restName = event.target.value
    setRestaurantName(restName)
  }

  function handleSetCity(event) {
    const city = event.target.value
    setCity(city)
  }

  async function handleSubmit() {
    const data = {
      name,
      description,
      actual_price,
      image_url,
      category,
      restaurantName,
      city
    }

    const response = await api.post('products', data)

    console.log(response);

    // console.log(data);
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
            <Dropzone onFileUploaded={setImage_url} />

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
              name='description'
              placeholder='Descrição'
              onChange={handleSetDescription}
            />

            <input
              type='text'
              name='price'
              placeholder='Preço'
              onChange={handleSetPrice}
            />

            <input
              type='text'
              name='category'
              placeholder='Categoria'
              onChange={handleSetCategory}
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
