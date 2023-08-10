const devedores = [4, 7, 12, 19];

const rua = document.querySelector('body');
rua.style.backgroundColor = 'blue';

const andar = document.querySelector('#andar-1');
andar.style.backgroundColor = 'black';

const andares = document.querySelectorAll('.andar');
const listaAndares = Array.from(andares).reverse();

listaAndares.forEach((umAndar, index) => {
  const apartamentos = document.querySelectorAll('.apartamento');
  const listaApartamentos = Array.from(apartamentos).reverse();

  listaApartamentos.forEach((apartamento, indexInterno) => {
    const numeroAp = (indexInterno + 1);

    apartamento.innerText = numeroAp;

    apartamento.style.color = 'pink'
    if (devedores.includes(numeroAp)) {
      apartamento.style.backgroundColor = 'green';
    }
  })
});

const apLigia = document.getElementsByClassName('ap-ligia');
const apartamentos = Array.from(apLigia);

apartamentos.forEach((umApLigia) => {
  umApLigia.style.backgroundColor = 'red';
});


