# Pokedex PokeAPI
![image](https://user-images.githubusercontent.com/102334488/219732362-7c477b75-8885-40a7-918a-ac29114d847e.png)
![image](https://user-images.githubusercontent.com/102334488/219733034-2518e7d5-530f-44d7-b453-bf137faaf466.png)
![image](https://user-images.githubusercontent.com/102334488/219734922-597c3d09-692e-4af6-84e1-c39f61142c1c.png)


##  :clipboard: Descrição
Aplicação de uma Pokedex(Pokemon) feito com React.js que consome os dados da API PokeAPI. 

Você pode acessar a aplicação online pela seguinte URL:
https://vercel.com/ericchandia/pokedex-pokeapi


## :computer:	 Tecnologias e Conceitos

Front-end:
- React.js com Javascript
- Sass
- Styled-Components

Requisições:
- Axios

Conceitos:
- Clean Code, Layered Architecture

Organização: 
- Eslint, Prettier


## :rocket: Páginas

  
   ```yml
ROTA /
  - Apresenta um grid com 50 pokemons. O usuário pode clicar no botão "Avançar" para mostrar os próximos 50 pokemons, ou clicar no botão "Voltar" para voltar para a pàgina anterior.
  - Passar o mouse em cima de um pokemon faz uma animação acontecer. No mobile é necessário clicar e segurar o pokemon.
  - Ao clicar em um pokemon, o usuário será redirecionado para as informações daquele pokemon.
```

   ```yml
ROTA /pokemon/:id
    - Apresenta os dados principais do pokemon com o id em questão.
    - O usuário pode clicar no botão "Voltar" para voltar para a tela anterior.
```


## :rocket: Pré requisitos
Antes de começar, você vai precisar ter instalado em seu computador as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/).
Caso quiser editar o código, irá precisar de um bom editor como o [VSCode](https://code.visualstudio.com/)


## 🏁 Rodando a aplicação
Primeiro, faça o clone desse repositório em seu computador:

```
git clone https://github.com/EricChandia/pokedex-pokeapi/
```

Entrar na pasta raiz do projeto.


Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm i
```

Finalizado o processo, inicie o projeto com o seguinte comando:
```
npm run start
```

A aplicação irá rodar por padrão na porta 3000. 


Será aberta uma janela no navegador com a aplicação funcionando.
