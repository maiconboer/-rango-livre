import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import { Container, Content, UserData, ContainerDish, Plus } from './styles';

import Dish from '../../components/CardDish'

const DashboardCompany = () => {

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

          <h3 className='suggestions'>Meus pratos</h3>

          {/* map nos pratos, fotos, descriptions e etc */}
          <ContainerDish>
            <Dish company={true}/>
            <Dish company={true}/>
            <Dish company={true}/>
            <Dish company={true}/>
          </ContainerDish>

          <Plus>
            <FiPlus size={24}/>
          </Plus>
        </Content>
      </Container>
    </>
  );
};

export default DashboardCompany;
