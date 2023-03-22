# Imagen de NodeJS
FROM node:slim
# Directorio de trabajo
WORKDIR /app
# Copia de los archivos
COPY . .
# Instalación de dependencias
RUN npm install
RUN npm install -g @angular/cli
# Puerto de la aplicación
EXPOSE 4200
# Comando de ejecución
CMD ["ng", "serve", "--host", "0.0.0.0"]