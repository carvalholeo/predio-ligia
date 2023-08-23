const rua = document.querySelector("body");
const mes = document.querySelector('#mes-referencia');
const pesquisa = document.querySelector('#pesquisa');
const form = document.querySelector('form');
rua.style.backgroundColor = "blue";

const listaApartamentos = [
  {
    id: 2,
    apartamento: "11",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 3]
      }
    ],
  },

  {
    id: 3,
    apartamento: "12",
    pago: [
      {
        status: false,
        mes: [12, 8, 5]
      },
      {
        status: true,
        mes: [4, 1, 2]
      }
    ],
  },
  {
    id: 4,
    apartamento: "14",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 5,
    apartamento: "21",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 6,
    apartamento: "22",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 8,
    apartamento: "23",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 9,
    apartamento: "24",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 10,
    apartamento: "31",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 11,
    apartamento: "32",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 12,
    apartamento: "33",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 13,
    apartamento: "34",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 14,
    apartamento: "41",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 15,
    apartamento: "42",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 16,
    apartamento: "43",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 17,
    apartamento: "44",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 18,
    apartamento: "51",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 19,
    apartamento: "52",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 20,
    apartamento: "53",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 21,
    apartamento: "54",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 22,
    apartamento: "61",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 23,
    apartamento: "62",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 24,
    apartamento: "63",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 25,
    apartamento: "64",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 26,
    apartamento: "71",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 27,
    apartamento: "72",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 28,
    apartamento: "73",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 29,
    apartamento: "74",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 30,
    apartamento: "81",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 31,
    apartamento: "82",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 32,
    apartamento: "83",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 33,
    apartamento: "84",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 34,
    apartamento: "91",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 35,
    apartamento: "92",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 36,
    apartamento: "93",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 37,
    apartamento: "94",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 38,
    apartamento: "101",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 39,
    apartamento: "102",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 40,
    apartamento: "103",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 41,
    apartamento: "104",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 42,
    apartamento: "201",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 43,
    apartamento: "203",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 44,
    apartamento: "204",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 45,
    apartamento: "301",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 46,
    apartamento: "302",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 48,
    apartamento: "303",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 49,
    apartamento: "304",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 50,
    apartamento: "401",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 51,
    apartamento: "402",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 52,
    apartamento: "403",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 53,
    apartamento: "404",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 54,
    apartamento: "13",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 55,
    apartamento: "202",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
];

const nomes = [
  "guilherme",
  "Cesar",
  "Luiz",
  "gustavo",
  "Andreia",
  "João",
  "sérgio",
  "rodolfo",
  "Flavio",
  "Vicente",
  "Alice",
  "Raimundo",
  "Patricia",
  "Daniel",
  "Rosa",
  "Flavia",
  "davi",
  "Fernanda",
  "Ana",
  "carolina",
  "Bruna",
  "felipe",
  "Max",
  "Mauro",
  "Eliza",
  "Enzo",
  "Gabriel",
  "Paulo",
  "Ariel",
  "Mauro",
  "Gabriela",
  "André",
  "Georgia",
  "Caetano",
  "Lucas",
  "Daniela",
  "Tiago",
  "Vitor",
  "Otávio",
  "Maria",
  "Mariana",
  "Nelson",
  "Tarcisio",
  "Helena",
  "Juliano",
  "Juliana",
  "Roberto",
  "Carla",
  "Inês",
  "Leda",
  "Fatima",
  "Lourdes"
];

form.addEventListener('submit', evento => evento.preventDefault());

nomes.forEach((nome, indice) => {
  const apartamento = listaApartamentos[indice];
  apartamento.nome = nome;
})

mes.addEventListener('change', function(evento) {
  const mesReferencia = +evento.target.value;

  for (let i = 0; i < todosApartamentos.length; i++) {
    decideQuemEstaDevendo(listaApartamentos[i], todosApartamentos[i], mesReferencia);
  }
});

pesquisa.addEventListener('change', pesquisaApartamento);
pesquisa.addEventListener('input', pesquisaApartamento);

const todosApartamentos = Array.from(
  document.querySelectorAll(".apartamento")
).reverse();

listaApartamentos.sort(function (itemA, itemB) {
  if (Number(itemA.apartamento) < Number(itemB.apartamento)) {
    return -1;
  }

  if (Number(itemA.apartamento) > Number(itemB.apartamento)) {
    return 1;
  }

  return 0;
})

for (let i = 0; i < todosApartamentos.length; i++) {
  const apartamento = todosApartamentos[i];
  decideQuemEstaDevendo(listaApartamentos[i], apartamento);

  apartamento.addEventListener('contextmenu', pagando);
  apartamento.addEventListener('click', devendo);
}

function devendo(evento) {
  const target = evento.target;
  const id = +target.id;
  const mes = +document.querySelector('#mes-referencia').value;

  if (isNaN(mes)) {
    return;
  }

  const index = listaApartamentos.findIndex(apartamento => apartamento.id === id);
  const naoPagamentoIndex = listaApartamentos[index].pago.findIndex(value => !value.status);
  const naoPagouEsseMes = listaApartamentos[index].pago[naoPagamentoIndex].mes.includes(mes);

  const pagamentoIndex = listaApartamentos[index].pago.findIndex(value => value.status);
  const pagouEsseMes = listaApartamentos[index].pago[pagamentoIndex].mes.findIndex(mes => mes);

  if(pagouEsseMes >= 0) {
    listaApartamentos[index].pago[pagamentoIndex].mes = listaApartamentos[index].pago[pagamentoIndex].mes.filter(mesInterno => mesInterno !== mes);
  }

  if (!naoPagouEsseMes) {
    listaApartamentos[index].pago[naoPagamentoIndex].mes.push(mes);
  }

  for (let i = 0; i < todosApartamentos.length; i++) {
    decideQuemEstaDevendo(listaApartamentos[i], todosApartamentos[i], mes);
  }
}

function pagando(evento) {
  evento.preventDefault();
  const target = evento.target;
  const id = +target.id;
  const mes = +document.querySelector('#mes-referencia').value;

  if (isNaN(mes)) {
    return;
  }

  const index = listaApartamentos.findIndex(apartamento => apartamento.id === id);
  const pagamentoIndex = listaApartamentos[index].pago.findIndex(value => value.status);
  const pagouEsseMes = listaApartamentos[index].pago[pagamentoIndex].mes.includes(mes);

  const naoPagamentoIndex = listaApartamentos[index].pago.findIndex(value => !value.status);
  const naoPagouEsseMes = listaApartamentos[index].pago[naoPagamentoIndex].mes.findIndex(mes => mes);

  if (naoPagouEsseMes >= 0) {
    listaApartamentos[index].pago[naoPagamentoIndex].mes = listaApartamentos[index].pago[naoPagamentoIndex].mes.filter(mesInterno => mesInterno !== mes);
  }

  if (!pagouEsseMes) {
    listaApartamentos[index].pago[pagamentoIndex].mes.push(mes);
  }

  for (let i = 0; i < todosApartamentos.length; i++) {
    decideQuemEstaDevendo(listaApartamentos[i], todosApartamentos[i], mes);
  }
}

function decideQuemEstaDevendo(infoApartamento, apartamento, mesReferencia = 0) {
  apartamento.style.backgroundColor = 'inherit';
  apartamento.innerText = `${infoApartamento.apartamento} - ${infoApartamento.nome}`;
  apartamento.id = infoApartamento.id;

  if (mesReferencia > 0) {
    const naoEstaPagoNoMes = infoApartamento.pago.findIndex(value => !value.status && value.mes.includes(mesReferencia));

    if (naoEstaPagoNoMes >= 0) {
      apartamento.style.backgroundColor = "green";
    }
  } else {
    const naoEstaPago = infoApartamento.pago.find(value => !value.status);
    const temMesDevendo = naoEstaPago.mes.length;

    if (naoEstaPago && temMesDevendo > 0) {
      apartamento.style.backgroundColor = "green";
    }
  }
}

function pesquisaApartamento(evento) {
  const target = evento.target;
  let value = target.value;
  const resultado = document.querySelector('.resultado');

  resultado.innerHTML = '';

  value = value.trim();

  if (value.length < 2) {
    return;
  }

  const apartamentos = listaApartamentos.filter(apartamento => {
    if (apartamento.apartamento === value) {
      return apartamento;
    }

    // Documentando por https://medium.com/thread-engineering/searching-and-sorting-text-with-diacritical-marks-in-javascript-45afef20e7f2#
    const nome = apartamento.nome.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    const valueClean = value.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');

    if (nome.search(valueClean) >= 0) {
      return apartamento;
    }
  });

  if (!apartamentos) {
    return;
  }

  apartamentos.forEach(apartamento => {
    const p = document.createElement('p');
    p.innerText = `${apartamento.apartamento} - ${apartamento.nome}`;
    resultado.appendChild(p);
  });

}
