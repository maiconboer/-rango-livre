import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const Deposits = () => {
  let [valueDeposit, setValueDeposit] = useState();

  const { addToast } = useToast();

  const user = JSON.parse(localStorage.getItem('@RangoLivre:user'));

  const token = localStorage.getItem('@RangoLivre:token');

  let meal = user.meal_allowance_balance;
  let regular = user.regular_balance;
  let total = regular + meal;
  let city = user.addresses[0].city;

  function handleChangeInput(event) {
    const { value, maxLength } = event.target;
    const size = value.slice(0, maxLength);

    setValueDeposit(size);
  }

  async function handleSubmitTransfer(event) {
    event.preventDefault();

    const input = document.querySelectorAll('input');
    console.log(input);
    let amount = Number(input.value);

    console.log(token);
    console.log(amount);

    let response = await api.post(
      'transactions',
      {
        amount: amount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 200) {
      addToast({
        type: 'success',
        title: 'Depósito realizado',
        description:
          'Deposito realizado com sucesso, atualizando valores, faça login novamente',
      });

      setTimeout(() => {
        localStorage.removeItem('@RangoLivre:purchase');
        localStorage.removeItem('@RangoLivre:token');
        localStorage.removeItem('@RangoLivre:user');

        document.location.reload(true);
      }, 2000);
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
                value={valueDeposit}
                onChange={handleChangeInput}
              />

              <div>
                <input
                  type="radio"
                  name="account_type"
                  value="0"
                  id="type0"
                  checked
                />
                <label htmlFor="type0">Mercado Pago</label>
                <input type="radio" name="account_type" value="1" id="type1" />
                <label htmlFor="type0">Mercado Vale</label>
              </div>

              <input
                type="text"
                name="to_CPF"
                placeholder="CPF de quem irá receber"
              />

              <input type="date" name="timestamp" />

              <div>
                <input type="checkbox" name="scheduled" id="scheduled" />
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

export default Deposits;
