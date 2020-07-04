import axios from 'axios';

async function getInformationsCity(cep) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response.data;
}

export default getInformationsCity;


