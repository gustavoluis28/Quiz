const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        "Manipular dados no banco de dados",
        "Estilizar páginas web",
        "Adicionar interatividade às páginas web",
      ],
      correta: 2
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar apenas números",
        "Um tipo de dado para armazenar apenas strings",
        "Uma estrutura de dados para armazenar múltiplos valores",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo para representar objetos tridimensionais",
        "Um conjunto de regras de estilo para páginas web",
        "Uma interface que representa a estrutura de um documento HTML como uma árvore de objetos",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Ambos realizam comparação estrita de valores e tipos",
        "O '==' realiza comparação estrita, enquanto o '===' realiza comparação de valores apenas",
        "O '==' realiza comparação de valores apenas, enquanto o '===' realiza comparação estrita",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o hoisting em JavaScript?",
      respostas: [
        "Uma técnica para elevar objetos na página",
        "O comportamento de mover declarações para o topo do escopo antes da execução do código",
        "Um método para organizar funções em uma hierarquia",
      ],
      correta: 1
    },
    {
      pergunta: "Como adicionar um evento de clique a um elemento HTML em JavaScript?",
      respostas: [
        "addEventListener('click', myFunction)",
        "attachEvent('click', myFunction)",
        "onclick = myFunction",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o operador ternário em JavaScript?",
      respostas: [
        "Um operador que realiza operações matemáticas com três operandos",
        "Um operador que realiza comparações lógicas com três operandos",
        "Um operador que cria um bloco de código condicional com três instruções",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'map()' em arrays JavaScript?",
      respostas: [
        "Filtrar elementos de um array",
        "Mapear cada elemento do array para um novo valor",
        "Ordenar os elementos de um array",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena múltiplos valores",
        "Uma função que não tem acesso a variáveis externas",
        "Um conjunto de regras para estilizar código JavaScript",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quisItem = template.content.cloneNode(true)
    quisItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quisItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quisItem.querySelector('dl').appendChild(dt)
    }
  
    quisItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quisItem)
  }