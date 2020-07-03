import React from 'react';
import { Link } from 'react-router-dom'
import {FiChevronsLeft, FiStar } from 'react-icons/fi'

import { Container, Content, ImageDish, ContainerDish } from './styles';

import dishImg from '../../assets/dish.jpg'

import Dish from '../../components/CardDish'

const Details = () => {

  return (
    <>
      <Container>
        <Content>
          <ImageDish>
            <Link to='home-client'>
              <span><FiChevronsLeft size={20} />Voltar</span>
            </Link>
            <img src={dishImg} alt="Dish"/>
          </ImageDish>

          <h3
            className='company'>
            Fitness Center
            <span>
              <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
            </span>
          </h3>
          <p className='price' >A partir de R$ 49,00</p>

          <p className='about-place'>Sobre o local: Convide a família e venha conhecer os melhores pratos da cidade! </p>

          {/* map nos pratos, fotos, descriptions e etc */}
          <ContainerDish>
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
          </ContainerDish>


        </Content>
      </Container>
    </>
  );
};

export default Details;
