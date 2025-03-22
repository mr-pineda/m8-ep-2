# Usar una imagen base de Node.js
# Este proyecto usa TypeScript v5.6.x por lo que requiere de node:22
FROM node:22

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el código al contenedor
COPY . .

# Instalar las dependencias
RUN yarn install

# Exponer el puerto de la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["yarn", "dev", "--host"]