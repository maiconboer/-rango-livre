import React, { useState, useCallback, useRef } from 'react';
import { FiArrowLeft, FiFileText, FiMail, FiUser, FiLock, FiSmartphone, FiCompass } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import getInformationsCity from '../../services/apiCep';

import { useToast } from '../../hooks/ToastContext';

import getValidationErrors from '../../utils/getValidationErros';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer } from './styles';

const SignUpClient = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const history = useHistory();

  const [city, setCity] = useState()
  const [uf, setUf] = useState()

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});


        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido.'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          CPF: Yup.string().required('CPF obrigatório'),
          name: Yup.string().required('Nome obrigatório'),
          phone_number: Yup.string().required('Celular obrigatório'),

          addresses: Yup.array().of(Yup.object().shape({
            nickname: Yup.string(),
            street: Yup.string().required('Rua obrigatória'),
            number: Yup.string().required('Nº obrigatório'),
            description: Yup.string(),
            CEP: Yup.string().required('CEP obrigatório'),
            city: Yup.string().required('Cidade obrigatória'),
            uf: Yup.string().required('Estado obrigatório'),
          }))

        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password, CPF, name, phone_number, nickname, street, number, description, CEP, city, uf } = data

        data = {
          email,
          password,
          CPF,
          name,
          phone_number,
          addresses: [{
            nickname,
            street,
            number,
            description,
            CEP,
            city,
            uf
          }]
        }

        await api.post('/users', data);
        history.push('/');

        console.log(data);

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Você já pode fazer seu logon no Rango Livre',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
        });
      }
    },
    [addToast, history],
  );

  console.log();

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
            />

            <Input
              type="password"
              name="password"
              icon={FiLock}
              placeholder="Senha"
            />
            <Input
              type="number"
              name="CPF"
              icon={FiFileText}
              placeholder="CPF"
              />

            <Input
              type="text"
              name="name"
              icon={FiUser}
              placeholder="Nome"
            />

            <Input
              type="number"
              name="phone_number"
              icon={FiSmartphone}
              placeholder="Celular"
            />

            <Input
              name="nickname"
              icon={FiCompass}
              placeholder="Nickname"
            />

            <Input
              type="number"
              name="CEP"
              icon={FiCompass}
              placeholder="CEP"
            />

            <Input
              name="street"
              icon={FiCompass}
              placeholder="Rua/Av."
            />

            <Input
              type="number"
              name="number"
              icon={FiCompass}
              placeholder="Nº"
            />

            <Input
              name="description"
              icon={FiCompass}
              placeholder="Referência"
            />

            <Input
              type="text"
              name="city"
              icon={FiCompass}
              placeholder="Cidade"
            />

            <Input
              type="text"
              name="uf"
              icon={FiCompass}
              placeholder="Estado"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUpClient;
