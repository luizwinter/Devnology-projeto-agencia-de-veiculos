Crie um arquivo readme falando um pouco sobre quais as decisões que você tomou para a resolução do exercício, e, caso não tenha feito algo, explique o motivo. Também informe os passos para fazer sua aplicação rodar, e caso tenha, o processo de deploy.

Case:
1- Cadastrar a compra de um veículo, modelo, marca, ano de fabricação, placa, cor, chassi, data da compra e valor da compra.

2- Registrar a venda de um veículo, com data da venda, valor da venda e comissão do vendedor (10% sobre o lucro da venda).

3- Deverá ser possível listar todos os veículos, veículos disponíveis e histórico de veículos vendidos.

4- Listar o valor total em compras e vendas, lucro/prejuízo do mês e o valor pago em comissões.

--------------------------------------------

Minhas decisões:
- Estruturar a logica em javascript.
- Layout em bootstrap (já possuo familiaridade e não perderia muito tempo com interface).

--------------------------------------------

Planejamento:
- Fazer um SPA para uma melhor dinâmica e resposta com o usuário. Também foi uma solução que tive para não precisar criar um DB.
- A página será dividida em 3 tópicos independentes e que podem ser consultados antes de uma interação.

--------------------------------------------

Layout de esboço:
- Utilizado como base um template bootstrap.
- Feito ajustes e testes para organizar melhor a interação do usuário com a página.

--------------------------------------------

Aplicação da lógica:
- Levantado os critérios para a solução do caso e dado inicio da implementação.
* Cadastro de Compra*
- O usuário deve preencher todos os campos senão a aplicação cancela e porta falha.
- Os campos devem ter validação para saber se estão de acordo com o tipo de dado.
- Ao enviar a compra de um novo carro é feito o registro em duas tabelas. Uma tabela vai listar todos os carros e este novo é listado como 'disponivel'. A outra tabela vai listar todas as compras/vendas.

* Cadastro de Venda*
- O usuário deve preencher todos os campos senão a aplicação cancela e porta falha.
- Os campos devem ter validação para saber se estão de acordo com o tipo de dado.
- Ao enviar a venda é feito uma consulta nos carros listados e caso o chassi vendido não conste nessa tabela a interação é cancelada. Caso exista o chassi a lista de carros é atualizada e o 'status' do carro que estava como 'disponível' passa a estar 'vendido'. Também calcula o valor da comissão após consultar na lista dos carros e comparar o valor da venda com o da compra.

*Histórico*
- Lista uma tabela com todas as compras/vendas.
- Possui filtros para listar todas as variantes, tais como apenas um ano específico, um dia, um vendador, compras, vendas etc.
- Calcula todos os valores listados podendo saber o total de comissão, o total de investimento na compra, o total vendido etc. O calculo pode ser combinado com o filtro para calcular apenas nos critérios do filtro.

*Lista de Veículos*
- Tabela que representa a lista de todos os carros. Serve como referência para outras interações e é atualizada de forma dinâmica.

--------------------------------------------

Finalização do projeto:
- Realizado novos ajustes no layout para deixa-lo responsivo. Inserido meta para compartilhamento de link com prévia da página. Possui resolução para mobile.
- Refaturado parte do código.

--------------------------------------------

Impressões finais:
- Projeto atende todos os requisitos solicitados porém faltou disponibilidade de tempo para poder investir mais.
- A ausência de um BD faz falta na hora de checar o código em outra plataforma.
- A falta de inteligência do código na hora de inserir dados no formulário passa uma apresentação não muito profissional.

--------------------------------------------

Observações pessoais:
- Vou estudar mais banco de dados para me sentir a vontade de praticar em projetos.
- Não tive tempo para criar outros critérios de validação. Um exemplo é que é possível inserir qualquer placa, qualquer cor ou qualquer data no formulário.
- Existem pontos do código que são usados em varias partes e não tive tempo para refatorar.
- A ausência de boas práticas principalmente na interação com o formulário deixa a desejar. Faltou tempo para ajustar.


