# :coin: Fintech Front :coin:

## Sobre o projeto :scroll:
Aplicação front-end para um sistema que permite realizar transferências financeiras.

Esse sistema deve ser utilizando em conjunto com o projeto [Fintech back-end](https://github.com/liberatov13/fintech-back-end)

## Tecnologias utilizadas :hammer_and_wrench:
- Angular (v14.2)
- Angular CLI (v14.2.6): Para criação do projeto, componentes, módulos e serviços
- PrimeNG (14.1.2): Para estilização de componentes
- PrimeIcons (v6.0.1): Para utilização de icones
- PrimeFlex (v3.2.1): Para utilização de classes CSS

## Executando projeto 🧑‍💻

### Máquina local :desktop_computer:
#### Pré-requisitos
- NodeJS (v16.18.0)
- NPM (v8.19.2)
- API Spring

Baixe e execute [projeto de back-end](https://github.com/liberatov13/fintech-back-end) do GitHub.
As instruções para executar a API estão disponíveis no README do projeto.

#### Instalação do front-end

```bash
# Clone o projeto front-end
git clone https://github.com/liberatov13/fintech-front-end.git

# Acesse o diretório do projeto
cd fintech-front-end

# Instale as dependencias
npm clean-install

# Execute o projeto com npm
npm start
```

A aplicação ficará disponível através da URL http://localhost:4200 ou http://127.0.0.1:4200

### Observações
- As seguintes contas são pré-cadastradas pela API, e podem ser utilizadas para testes:

|		Nome		|		Número		|		Saldo		|
|:---------:|:-----------:|:---------:|
|Roberto		|123456				|20.000,00	|
|Lucas			|000123				|150,00			|
|João				|654321				|15000,00		|
|Jose				|789123				|10.000,00	|

- As informações das contas podem ser consultadas através do recurso `GET` http://localhost:8080/contas da API.
- Foi utilizada uma conta padrão (Conta 789123) para o envio das transferências através do front.

## Autor :pencil2:
[Elvis Liberato de Barros](https://www.linkedin.com/in/elvisbarros/)
