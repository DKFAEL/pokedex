# Pokedex
Este repositório contém a aplicação Pokedex, um sistema que permite visualizar informações sobre diferentes espécies de Pokémon. A aplicação é executada em um contêiner Docker, proporcionando facilidade na instalação e execução em diferentes ambientes.

![poke](https://github.com/DKFAEL/pokedex/assets/113553773/43b37479-8d1e-424d-8673-fb92a7441efe)


## Pré-requisitos
Antes de executar a aplicação, verifique se você possui os seguintes pré-requisitos instalados em sua máquina:

Docker: Para instalar o Docker, siga as instruções oficiais de acordo com o seu sistema operacional: Documentação do Docker
# #Configuração
Siga as etapas abaixo para configurar e executar o Pokedex em seu ambiente local:

Clone este repositório em sua máquina:

bash
Copy code
git clone https://github.com/DKFAEL/pokedex.git
Acesse o diretório do projeto:

bash
Copy code
cd pokedex
Construa a imagem Docker executando o seguinte comando:

Copy code
docker build -t pokedex .
Esse comando criará uma imagem Docker chamada "pokedex" com base no arquivo Dockerfile fornecido.

Executando o Pokedex
Após concluir a etapa de configuração, você poderá executar o Pokedex usando o Docker. Siga as etapas abaixo:

Execute o contêiner Docker com o seguinte comando:

Copy code
docker run -p 8081:80 pokedex
O comando acima iniciará o contêiner e mapeará a porta 8000 do contêiner para a porta 8000 do seu host local.

Abra seu navegador da web e acesse http://localhost:8081 para visualizar a Pokedex.
