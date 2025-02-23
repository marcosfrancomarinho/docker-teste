# Usa uma versão leve do Node.js
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas arquivos necessários para instalar dependências
COPY package.json ./

# Instala apenas dependências de produção para deixar a imagem menor
RUN yarn install

# Copia o restante do código
COPY . .

# Compila o código
RUN yarn build

# Garante que o usuário do contêiner não é root
USER node

# Expõe a porta 8080
EXPOSE 8080

# Comando para rodar o app
CMD ["node", "dist/bundle.js"]
