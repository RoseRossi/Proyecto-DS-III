# Usa una imagen oficial de Node.js más reciente como base
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que corre la aplicación
EXPOSE 5000

# Define el comando por defecto para correr la aplicación
CMD ["node", "server.js"]
