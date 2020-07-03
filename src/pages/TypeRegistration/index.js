import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer } from './styles';

const TypeRegistration = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />


              <Link to='/signup-client'>
                <Button>Sou cliente</Button>
              </Link>

              <Link to='/signup-company'>
                <Button>Sou empresa</Button>
              </Link>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default TypeRegistration;
