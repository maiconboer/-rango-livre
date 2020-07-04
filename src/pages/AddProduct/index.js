import React, { useState } from 'react';
import { Form } from '@unform/web'

import { Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import { Container, Content, UserData, ContainerForm } from './styles';

import Dropzone from '../../components/Dropzone';

const AddProduct = () => {

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [selectedFile, setSelectedFile] = useState()

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
    setPrice(priceDish)
  }

  function handleSubmit() {
    const data = {
      name,
      description,
      price,
      selectedFile
    }

    console.log(data);
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
            <Dropzone onFileUploaded={setSelectedFile} />

            <input
              type='text'
              name='name'
              placeholder='Informe o nome'
              value={name}
              onChange={handleSetName}
            />

            <input
              type='text'
              name='description'
              placeholder='Informa uma descrição'
              onChange={handleSetDescription}
            />

            <input
              type='text'
              name='price'
              placeholder='Informe o preço'
              onChange={handleSetPrice}
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
