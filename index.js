




const key = 'f8e4adc140cd5069ee498f171b85392f';

// Função para pesquisar
function pesquisar(){
    let salvo = document.querySelector('#valor');
    console.log(salvo.value);
    return salvo.value;
}

// Função para consumir a API usando fetch
async function consumirAPI(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    console.log(data.name)
    document.querySelector('.city').innerHTML = `${data.name}`.toUpperCase()
    document.querySelector('.temperatura-min').innerHTML = ` TEMPERATURA MINIMA: ${data.main.temp_min}°C`
    document.querySelector('.temperatura-max').innerHTML = `TEMPERATURA MAXIMA: ${data.main.temp_max}°C`
    document.querySelector('.ceu').innerHTML = data.weather[0].description.toUpperCase()
    document.querySelector('.img').src =  ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    console.log(data.sys.country)
    document.querySelector('.flags').src = `https://flagsapi.com/${data.sys.country}/shiny/64.png`


   console.log(data.weather[0].description)




  } catch (error) {
    console.error(error);
  }
}

// Chama a função para consumir a API quando for necessário
function iniciarPesquisa() {
  const cidade = pesquisar();
  consumirAPI(cidade);
}

// Adiciona um ouvinte de evento para o clique do botão
const botaoPesquisar = document.getElementById('botaoPesquisar');
botaoPesquisar.addEventListener('click', iniciarPesquisa);

















//data

let colocardata = document.querySelector('.data');
colocardata.innerHTML = `Hora local: ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })}`;