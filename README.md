<!-- PROJECT LOGO -->
<br />
<p align="center">
 <h3 align="center">Projeto HealthShift</h3>
 <br>
  <a align="center">
    <img  src="./src/assets/HealthShift.png"  alt="Logo">
  </a>

</p>

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar e escrita toda em JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
├── src/
│   ├── assets/
│   │   └── adaptive-icon.png
│   │   └── favicon.png
│   │   └── HealthShift.png
│   │   └── icon.png
│   │   └── perfil.png
│   │   └── spash.png
│   ├── contexts/
│   │   └── authContext.js
│   │   └── shiftContext.js
│   ├── custom/
│   │   ├── cards/
│   │       └── authContext.js
│   │   ├── drawer/
│   │       └── customDrawer.js
│   │   ├── select/
│   │        └── select.js
│   │   ├── shifts/
│   │        └── shifts.js
│   ├── mock/
│   │   └── Unidades.js
│   ├── routes/
│   │   └── app.routes.js
│   │   └── auth.routes.js
│   │   └── index.js
│   ├── screens/
│   │   ├── Detail/
│   │        └── components/
│   │            └── unityImage.js
│   │       └── customDrawer.js
│   │   ├── Home/
│   │        └── components/
│   │            └── unidadeCard.js
│   │       └── home.js
│   │   ├── Login/
│   │        └── components/
│   │            └── formLogin.js
│   │            └── formRegister.js
│   │       └── login.js
│   │   ├── Turnos/
│   │       └── turnos.js
│   ├── services/
│   │   └── firebase.js
│   │   └── globalstorage.js
│   ├── themes/
│   │   └── basedThemes.js
│   ├── utils/
│   │   └── checkColor.js
│   │   └── formatDate.js
│   ├── validators/
│   │   ├── errors/
│   │       └── errors.js
│   │   └── authValidators.js
│   │   └── checkColor.js
│   │   └── formatDate.js
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
```

### Edição

Nesta seção haverão instruções estruturais, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;

  - **assets** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação.

  - **contexts** - Diretório para armazenamento de contextos da aplicação.
  -      - **authContext.js** - Arquivo com toda a lógica de contexto de autenticação.
  -     - **shiftContext.js** - Arquivo com toda a lógica de contexto relacionado ao gerenciamento de turnos na aplicação.

  - **custom** - Diretório para armazenamento dos componentes customizados de bibliotecas externas, que serão utilizados na aplicação.

  - **mock** - Diretório para armazenamento dos dados exemplo que serão utilizados na aplicação, simulando requisições HTTP e banco de dados.

  - **routes** - Diretório para armazenamento das configurações rotas da aplicação.

  - **screens** - Diretório para armazenamento dos componentes principais da aplicação.

  - **services** - Diretório para armazenamento dos serviços da aplicação, separando responsabilidades de outros componentes.
  - **themes** - Diretório para armazenamento das configurações de tema da aplicação, como cores padrão.

  - **utils** - Diretório para armazenamento de funções auxiliares que serão utilizadas em toda a aplicação.

  - **validators** - Diretório para armazenamento de validações com lógica de negócio e erros comuns da aplicação.

- **.gitignore** - Arquivo para evitar versionamento de arquivos não necessários para a cada ambiente de desenvolvimento, como ambientes de IDE e módulos do npm
- **App.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação.

- **app.json** - Arquivo de configuração da aplicação.

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

## Contato

Vinícius - **vini383@gmail.com**
