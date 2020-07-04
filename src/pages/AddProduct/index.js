import React, { useState } from 'react';
// import { Form } from '@unform/web'

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import { Container, Content, UserData, ContainerForm } from './styles';

import Dropzone from '../../components/Dropzone';

const AddProduct = () => {
  const history = useHistory();

  const [selectedFile, setSelectedFile] = useState();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    actual_price: 0,
    regular_price: 0,
    discount: 0,
    restaurant: '',
    city: '',
    min_estimative: 0,
    max_estimative: 0,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const {
      name,
      category,
      actual_price,
      regular_price,
      discount,
      delivery_fare,
      description,
      restaurant,
      min_estimative,
      max_estimative,
      city,
    } = formData;

    const data = new FormData();
    data.append('name', name);
    data.append('category', category);
    data.append('actual_price', Number(actual_price));
    data.append('regular_price', Number(regular_price));
    data.append('discount', Number(discount));
    data.append('delivery_fare', Number(delivery_fare));
    data.append('description', description);
    data.append('restaurant', restaurant);
    data.append('min_estimative', Number(min_estimative));
    data.append('max_estimative', Number(max_estimative));
    data.append('city', city);

    if (selectedFile) {
      data.append('image', selectedFile);
    }

    const response = await api.post('products', data);

    if (response.data) {
      history.push('/home-client');
    }
  }

  return (
    <>
      <Container>
        <Content>
          <UserData>
            <h2>Bem vindo(a), Empresa xyz</h2>

            <div className="total">
              <p>Saldo total R$ 599,01</p>
            </div>
          </UserData>

          <Link to="home-client">
            <span>
              <FiChevronsLeft size={20} />
              Voltar
            </span>
          </Link>

          <ContainerForm>
            <form onSubmit={handleSubmit}>
              <Dropzone onFileUploaded={setSelectedFile} />

              <input
                type="text"
                name="restaurant"
                placeholder="Nome do Restaurante"
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="name"
                placeholder="Nome do prato"
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="category"
                placeholder="Categoria"
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="description"
                placeholder="Descrição"
                onChange={handleInputChange}
              />

              <input
                type="number"
                name="regular_price"
                placeholder="Preço sem desconto"
                onChange={handleInputChange}
              />

              <input
                type="number"
                name="actual_price"
                placeholder="Preço atual"
                onChange={handleInputChange}
              />

              <input
                type="number"
                name="discount"
                placeholder="Desconto em R$"
                onChange={handleInputChange}
              />

              <input
                type="number"
                name="delivery_fare"
                placeholder="Taxa de entrega"
                onChange={handleInputChange}
              />

              <input
                type="number"
                name="min_estimative"
                placeholder="Estimativa mínima"
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="max_estimative"
                placeholder="Estimativa máxima"
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="city"
                placeholder="Cidade"
                onChange={handleInputChange}
              />
              <button type="submit">Salvar prato</button>
            </form>
          </ContainerForm>
        </Content>
      </Container>
    </>
  );
};

export default AddProduct;
