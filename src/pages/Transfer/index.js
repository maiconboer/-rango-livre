import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  FiCreditCard,
  FiDollarSign,
  FiChevronsRight,
  FiChevronsLeft,
} from 'react-icons/fi';

import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext';

import formatMoney from '../../utils/formatMoney';
import Button from '../../components/Button';

import { Container, Content, UserData, Cash, ContainerForm } from './styles';

const Transfer = () => {
  const [formData, setFormData] = useState({
    amount: 0,
    accountType: 0,
    toCPF: '',
    timestamp: '',
    scheduled: true,
  });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('@RangoLivre:user')));

  const { addToast } = useToast();
  const history = useHistory();

  const [regular, setRegular] = useState(user.regular_balance)
  const token = localStorage.getItem('@RangoLivre:token');
  let meal = user.meal_allowance_balance;
  let total = regular + meal;

  function handleChangeInput(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  }

  useEffect(() => {
    async function getUser() {
      const userResponse = await api.get(`users/${user.uuid}`, {headers: {
        Authorization: `Bearer ${token}`
      }})
      localStorage.setItem('@RangoLivre:user', JSON.stringify(user));
      setUser(userResponse.data)
    }
    getUser();
  }, [])

  async function handleSubmitTransfer(event) {
    event.preventDefault();

    const { amount, accountType, toCPF, scheduled, timestamp } = formData;

    let response = await api.post(
      'transactions',
      {
        amount: Number(amount),
        account_type: Number(accountType),
        to_CPF: toCPF,
        scheduled: !scheduled,
        timestamp: Number(Date.parse(timestamp)) / 1000,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 201) {
      addToast({
        type: 'success',
        title: 'Transferência realizada',
        description:
          'Transferência realizada com sucesso, redirencionando para home-page',
      });

      setTimeout(() => {
        history.push('/home-client');
      }, 5000);

      setRegular(response.data.regular_balance)
    }
  }

  return (
    <>
      <Container>
        <Content>
          <UserData>
            <h2>Bem vindo(a), {user.name}</h2>
            <Cash>
              <div>
                <FiCreditCard size={20} />
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

            <div className="total">
              <p>Saldo total {formatMoney(total)}</p>
            </div>

            <div className="historic-transfer">
              <Link to="/transfer-money">
                Realizar transferencia
                <FiChevronsRight size={20} />
              </Link>
            </div>
          </UserData>

          <Link to="/home-client">
            <span className="backToDetail">
              <FiChevronsLeft />
              Voltar
            </span>
          </Link>

          <ContainerForm>
            <form onSubmit={handleSubmitTransfer}>
              <input
                type="number"
                name="amount"
                placeholder="Valor da transferência. Ex: 300"
                maxLength="3"
                onChange={handleChangeInput}
              />

              <div>
                <input
                  type="radio"
                  name="accountType"
                  value="0"
                  id="type0"
                  onChange={handleChangeInput}
                  checked
                />
                <label htmlFor="type0">Mercado Pago</label>
                <input
                  type="radio"
                  name="accountType"
                  value="1"
                  id="type1"
                  onChange={handleChangeInput}
                />
                <label htmlFor="type0">Mercado Vale</label>
              </div>

              <input
                type="text"
                name="toCPF"
                placeholder="CPF de quem irá receber"
                onChange={handleChangeInput}
              />

              <input
                type="date"
                name="timestamp"
                onChange={handleChangeInput}
              />

              <div>
                <input
                  type="checkbox"
                  name="scheduled"
                  id="scheduled"
                  onChange={handleChangeInput}
                />
                <label htmlFor="scheduled">Agendar transferência</label>
              </div>

              <Button type="submit">Transferir</Button>
            </form>
          </ContainerForm>
        </Content>
      </Container>
    </>
  );
};

export default Transfer;
